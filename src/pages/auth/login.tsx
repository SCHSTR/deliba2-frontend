import styled from "styled-components"
import { Btn, CustomInput } from "../../styles/global"

const Login = ( props ) => {
    return(
        <Content>
            <div className="login-content">
                <form action="POST" className="login-form">
                    <CustomInput type="text" name="" id="" placeholder="Email" />
                    <CustomInput type="password" name="" id="" />
                    <Btn type="submit">Entrar</Btn>
                </form>
            </div>
            <div className="image-content">
                aqui tem coisa aleatoria
            </div>
        </Content>
    )
}

const Content = styled.div`
    height: 100vh;

    .login-form{
        display: flex;
        flex-direction: column;
    }

    .image-content{
        display: none;
    }

    @media only screen and (min-width: 768px) {
        display: flex;

        .login-form{

        }

        .login-content{
            display: grid;
            justify-content: stretch;
            align-items: center;
            padding: 48px;
            width: 40%;
            max-width: 600px;
            background: ${props => props.theme.light_theme.white}
        }

        .image-content{
            width: 100%;
            display: block;
            background: ${props => props.theme.light_theme.primary};
        }
    }
`

export default Login