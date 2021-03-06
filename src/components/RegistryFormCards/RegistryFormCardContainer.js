import React from 'react';
import Card from '../AboutPageCards/AboutPageCard/AboutPageCard';
import '../../assets/sass/components/RegistryFormCards/_registryFormCardContainer.scss';

const RegistryFormCards = (props) => {
    return(
        <div className="registry-form-cards bg-color">
            <Card isBig={true} isBlur={false} badge={true} title={props.title} name={props.name}>
                {props.children}
            </Card>
            <Card isBig={false} isBlur={true} badge={false} title={props.title} name={props.name}>
                {props.children}
            </Card>
            <Card isBig={false} isBlur={true} badge={true} title={props.title} name={props.name}>
                {props.children}
            </Card>
        </div>            
    );
}

export default RegistryFormCards;