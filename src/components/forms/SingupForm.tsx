import { yupResolver } from "@hookform/resolvers/yup";
import { Box } from "@mui/material";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { ROUTES_PATH } from "../../constants";
import {
  CreateUserInput,
  useSignInMutation,
  useSignUpMutation,
} from "../../gql/graphql";
import { useAuth } from "../../hooks";
import { InputFieldWrapper, PrimaryButton } from "../../styles";
import { yupSchema } from "../../validation";
import { PrimaryInputField } from "../common";
import { PrimaryPasswordField } from "../common/inputFields/PrimaryPasswordField";
import { PrimaryLoader } from "../common/loader/PrimaryLoader";
const schema = yupSchema.signUp;

export const SignupForm = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const {
    control,
    handleSubmit,
    formState: { dirtyFields },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      ...schema.getDefault(),
    },
  });

  const [signUp, { loading: signupLoading }] = useSignUpMutation({
    onCompleted: () => {
      toast.success("Successfully Signed up");
    },
    onError: () => {
      toast.error("User already registerd");
    },
  });

  const [signIn, { loading: signInLoading }] = useSignInMutation({
    onCompleted: (data) => {
      if (data.signIn.accesstoken) {
        login(data.signIn.accesstoken);
        navigate(ROUTES_PATH.home);
      }
    },
    onError: () => {
      toast.error("Invalid Credentials!");
    },
  });

  const onFormSubmit = (values: CreateUserInput) => {
    signUp({
      variables: {
        name: values.name,
        email: values.email,
        password: values.password,
      },
    }).then((response) => {
      toast.error("singup successfully happen");
      if (!response.errors) {
        signIn({
          variables: {
            email: values.email,
            password: values.password,
          },
        });
      }
    });
  };

  return (
    <Box sx={{ marginTop: { xs: "35px", md: "74px" } }}>
      <PrimaryLoader isLoading={signupLoading && signInLoading} />
      <Box>
        <form onSubmit={handleSubmit(onFormSubmit)}>
          <InputFieldWrapper sx={{ marginTop: "0px" }}>
            <PrimaryInputField
              name="name"
              label="What’s your full name?"
              control={control}
              placeholder="Enter your full name"
            />
          </InputFieldWrapper>

          <InputFieldWrapper sx={{ marginTop: "50px" }}>
            <PrimaryInputField
              name="email"
              label="What’s your email?"
              control={control}
              placeholder="Enter your email address"
            />
          </InputFieldWrapper>

          <InputFieldWrapper sx={{ marginTop: "50px" }}>
            <PrimaryPasswordField
              name="password"
              label="Create a password"
              control={control}
              placeholder="Enter your password"
              helperText="Use 8 or more characters with a mix of letters, numbers & symbols"
            />
          </InputFieldWrapper>

          <Box sx={{ marginTop: "40px" }}>
            <PrimaryButton fullWidth type="submit" variant="contained">
              Create an account
            </PrimaryButton>
          </Box>
        </form>
      </Box>
    </Box>
  );
};
