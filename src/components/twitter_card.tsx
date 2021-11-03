import React from "react"
import styled from "styled-components"

import { Icon } from '@iconify/react';

const TwitterCard = ( props ) => {
    return(
        <Card>
            <div className="half">
                <div className="image-placeholder">
                    <img src={props.avatar_url} alt="" />
                </div>
            </div>
            <div>
                <div className="user-detail">
                    <p className="name">{props.nome}</p>
                    <p className="usermail">@{props.user}</p>
                </div>
                <div className="testimonial">
                    {props.testimonial}
                </div>
                <div className="credits">
                    Source: <Icon icon="logos:twitter" /> Twitter
                </div>
            </div>
        </Card>
    )
}

const Card = styled.div`
    background: white;
    border-radius: 12px;
    padding: 24px;
    display: flex;
    align-items: flex-start;
    transition: all 350ms;

    &:hover{
        box-shadow: 0px 7px 15px 0px rgba(0,0,0,0.1);
        transform: translateY(-5px);
    }

    .name{
        font-weight: 600;
        color: #333;
    }

    .usermail{
        font-size: ${props => props.theme.default.small_text};
        margin-bottom: 8px;
    }

    .credits{
        margin-top: 8px;
        font-size: ${props => props.theme.default.small_text}
    }

    .half{
        min-width: 72px;
        margin-right: 12px;
    }

    img{
        max-width: 100%;
        
    }

    .image-placeholder{
        overflow: hidden;
        position: relative;
        background: red;
        border-radius: 999px;
        width: 72px;
        height: 72px;

    }
`

export default TwitterCard