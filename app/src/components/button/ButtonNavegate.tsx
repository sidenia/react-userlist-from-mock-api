import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import ButtonGeneric from './Button';

interface ButtonNavigateProps {
    wishedRoute: string;
    buttonActionName: string; // Adicionando a propriedade para o nome da ação
}

const ButtonNavigate: React.FC<ButtonNavigateProps> = ({ wishedRoute, buttonActionName }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(wishedRoute);
    };

    return (
        <ButtonGeneric buttonText={buttonActionName} onClick={handleClick} />
    );
};

export default ButtonNavigate;
