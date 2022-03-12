import React from "react";
// import PropTypes from "prop-types";
import "@styles/components/ToggleSwitch.module.scss"; // Styles

/*
refer: https://www.sitepoint.com/react-toggle-switch-reusable-component/
Toggle Switch Component
Note: id, checked and onChange are required for ToggleSwitch component to function. The props name, small, disabled
and optionLabels are optional.
Usage: <ToggleSwitch id="id" checked={value} onChange={checked => setValue(checked)}} />
*/


type ToggleSwitchProps = {
    id: string,
    checked: boolean,
    onChange: (checked: boolean) => void,
    name: string,
    optionLabels: string[],
    small: boolean,
    disabled: boolean
};

export const ToggleSwitch = (props: ToggleSwitchProps) => {
    const { id, checked, onChange, name, optionLabels, small, disabled } = props;
    function handleKeyPress(e: any) {
        if (e.keyCode !== 32) return;

        e.preventDefault();
        onChange(!checked);
    }


    return (
        <div className={"toggle-switch" + (small ? " small-switch" : "")}>
            {/* <div className={styles.toggle_switch}> */}
            <input
                type="checkbox"
                name={name}
                className="toggle-switch-checkbox"
                id={id}
                checked={checked}
                onChange={(e) => onChange(e.target.checked)}
                disabled={disabled}
            />
            {id ? (
                <label
                    className="toggle-switch-label"
                    tabIndex={disabled ? -1 : 1}
                    onKeyDown={(e) => handleKeyPress(e)}
                    htmlFor={id}
                >
                    <span
                        className={
                            disabled
                                ? "toggle-switch-inner toggle-switch-disabled"
                                : "toggle-switch-inner"
                        }
                        data-yes={optionLabels[0]}
                        data-no={optionLabels[1]}
                        tabIndex={-1}
                    />
                    <span
                        className={
                            disabled
                                ? "toggle-switch-switch toggle-switch-disabled"
                                : "toggle-switch-switch"
                        }
                        tabIndex={-1}
                    />
                </label>
            ) : null}
        </div>
    );
};
