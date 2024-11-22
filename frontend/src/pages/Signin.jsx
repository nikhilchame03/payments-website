import { BottomWarning } from "../components/BottomWarning"
import { Button } from "../components/Button"
import { Heading } from "../components/Heading"
import { InputBox } from "../components/InputBox"
import { SubHeading } from "../components/SubHeading"

export const Signin = () =>{
    return <div className="bg-slate-300 h-screen flex justify-center ">
        <div className="flex flex-col justify-center">
            <div className="w-80 bg-white rounded-lg text-center p-2 max-h-screen px-4">

                <Heading label={"Sign In"}></Heading>
                <SubHeading label={"Enter your Credentials to access your account"}></SubHeading>
                <InputBox label={"Email"}></InputBox>
                <InputBox label={"Password"}></InputBox>
                <div>
                    <Button label={"Sign In"}></Button>
                </div>
                <BottomWarning label={"Don't have an account?"} buttonText={"Sign up"} to={"/signup"}></BottomWarning>


            </div>

        </div>

    </div>
}