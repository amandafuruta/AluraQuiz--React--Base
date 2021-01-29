import styled from 'styled-components'
import PropTypes from 'prop-types'

const InputBase = styled.input` 
    width: 100%;
    padding: 15px;
    font-size: 14px;
    border: 1px solid ${({theme}) => theme.colors.primary};
    color: black;
    background-color: ${({theme}) => theme.colors.mainbg};
    border-radius: ${({theme}) => theme.borderRadius};
    outline: 0;
    margin-bottom: 25px;

`;

export default function Input({onChange, placeholder}){
    return (
        <div>
            <InputBase 
            onChange = {onChange}
            placeholder = {placeholder}/>
        </div>
    )
}

Input.propTypes = {
    value: ' '
}

Input.propTypes = { // o propType garante que tudo que é recebido de props
// que os componentes estejam esperando sejam do tipo desejado
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string.isRequired,
    name:PropTypes.string.isRequired,
    value: PropTypes.string.isRequired
}