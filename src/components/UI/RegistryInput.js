import React from 'react';
import '../../assets/sass/components/UI/_registryInput.scss';

const registryInput = (props) => {
    return (
        <div>
            <input className="ui-registry-input" onChange={props.validation} type="text" placeholder="شماره همراه را وارد کنید 900 36 61 0912" />
            <button className="ui-registry-btn" onClick={props.clicked} disabled={!props.isValid} type="button">ثبت نام سریع</button>
        </div>
    );
}

export default registryInput;