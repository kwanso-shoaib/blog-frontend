import { BaseTextFieldProps, SxProps, Theme } from '@mui/material';

export type HeaderNavLinkType = {
    id: number;
    to: string;
    text: string;
    isProtected: boolean;
  };
  


export type PrimaryPasswordFieldProps = {
    name: string;
    control: any;
    label: string;
    helperText?: string;
    placeholder?: string;
    props?: BaseTextFieldProps;
  };

export type PasswordInputAdornmentProps = {
    showPassword: boolean;
    onhandleClickShowPassword: () => void;
  };
  
  
export type PrimaryInputFieldProps = {
  name: string;
  control: any;
  label: string;
  placeholder?: string;
  helperText?: string;
  props?: BaseTextFieldProps;
};

export type PrimaryLoaderProps = {
  isLoading: boolean;
};
