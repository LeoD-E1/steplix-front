// importing external
import { Fragment } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { useHistory } from "react-router-dom";

// Importing Styles
import "./styles/formRates.css";

// importing Querys
import { postRate } from "../querys/postRate";
import { queryGetRates } from "../querys/getRates";

const FormRates = () => {
  const history = useHistory();
  const currencies = useSelector((state) => state.currency);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    postRate(data);
    queryGetRates();
    history.push("/rates");
  };

  return (
    <Fragment>
      <h3>New Quotation</h3>
      {currencies.length > 0 ? (
        <Form onSubmit={handleSubmit(onSubmit)}>
          <FormGroup>
            <Label for="exampleSelect">Crypto</Label>
            <Input
              type="select"
              {...register("id_currency", { required: true })}
            >
              {currencies.map((item) => (
                <option value={item.id_currency} key={item.id_currency}>
                  {item.symbol}
                </option>
              ))}
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="exampleNumber">Value</Label>
            <Input
              {...register("value", {
                pattern: /[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)/,
                required: true,
              })}
            />
          </FormGroup>
          {errors?.value?.type === "required" && (
            <span className="error">This field is required</span>
          )}
          {errors?.value?.type === "pattern" && (
            <span className="error">Numbers only</span>
          )}{" "}
          <br />
          <Button type="submit" color="primary">
            Send
          </Button>
        </Form>
      ) : (
        <h6>You can't post anything cause there are no cryptos available</h6>
      )}
    </Fragment>
  );
};

export default FormRates;
