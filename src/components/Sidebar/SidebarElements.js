import styled from 'styled-components'
import {FiGithub, FiTwitter, FiLinkedin, FiCodepen,} from 'react-icons/fi'

export const SidebarSocial = styled.div`
    width: 50px;
    height: 300px;
    position: fixed;
    bottom: 0;
    left: 25px;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    &:hover{
        outline: 2px dashed ${({currentTheme})=>(currentTheme.primaryColor)};
    }
    
    @media only screen and (max-width: 768px){
        display: none;
    }

    &:after{
        content: "";
    }
`

export const SocialLink = styled.div`

    display: flex;
    flex-direction: column;
    height: 65%;
    justify-content: space-evenly;

   
`

//----------------------Icons-----------------
export const Github = styled(FiGithub)`
    font-size: 20px;
    transition: all 0.5s ease;
    cursor: pointer;
    color: ${({currenttheme})=>(currenttheme.primaryColorText)};
    &:hover{
        transform: translateY(-3px);
        color: ${({currenttheme})=>(currenttheme.primaryColor)};
    }
`

export const Twitter = styled(FiTwitter)`
    font-size: 20px;
    transition: all 0.5s ease;
    cursor: pointer;
    color: ${({currenttheme})=>(currenttheme.primaryColorText)};
    &:hover{
        transform: translateY(-3px);
        color: ${({currenttheme})=>(currenttheme.primaryColor)};
    }
`

export const Linkedin = styled(FiLinkedin)`
    font-size: 20px;
    transition: all 0.5s ease;
    cursor: pointer;
    color: ${({currenttheme})=>(currenttheme.primaryColorText)};
    &:hover{
        transform: translateY(-3px);
        color: ${({currenttheme})=>(currenttheme.primaryColor)};
    }
`

export const Codepen = styled(FiCodepen)`
    font-size: 20px;
    transition: all 0.5s ease;
    cursor: pointer;
    color: ${({currenttheme})=>(currenttheme.primaryColorText)};
    &:hover{
        transform: translateY(-3px);
        color: ${({currenttheme})=>(currenttheme.primaryColor)};
    }
`
//--------------------------------------------------


export const SidebarEmail = styled.div`
    width: 50px;
    height: 300px;
    position: fixed;
    bottom: 0;
    right: 25px;
    cursor: pointer;

    writing-mode: vertical-lr;
    text-orientation: mixed;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media only screen and (max-width: 768px){
        display: none;
    }

    &:hover{
        outline: 2px dashed ${({currentTheme})=>(currentTheme.primaryColor)};
    }
`

export const EmailLink = styled.a`
    text-decoration: none;
    margin-top: 1.2em;
    margin-bottom: 1.2em;
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
    color: ${({currentTheme})=>(currentTheme.primaryColorText)};
    

    transition: all 0.5s ease;
    cursor: pointer;
    &:hover{
        transform: translateY(-3px);
        color: ${({currentTheme})=>(currentTheme.primaryColor)};
    }
`

export const Line = styled.div`
    width: 2px;
    height: 110px;
    background: ${({currentTheme})=>(currentTheme.primaryColor)};
`

