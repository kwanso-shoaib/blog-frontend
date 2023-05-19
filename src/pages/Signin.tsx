import { Box } from "@mui/material"
import { AuthPageFormContainer, AuthPageHeading } from "../styles"
import { SigninForm } from "../components/forms/SigninForm"

export const Signin = ()=> (

    <Box>
        <AuthPageHeading>
            SigIn
        </AuthPageHeading>
        <AuthPageFormContainer>
            <SigninForm/>
        </AuthPageFormContainer>
    </Box>
) 