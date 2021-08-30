import React, { useEffect, useState } from 'react';
import '../css/AddQuestioneerOptions.css'

const AddQuestioneerOptions = ({ questionType, getOptions }) => {
    const [optionsText, setOptionsText] = useState({
        optionA: "",
        optionB: "",
        optionC: "",
        optionD: ""
    })

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setOptionsText({ ...optionsText, [name]: value });
    }
    useEffect(() => {
            setOptionsText({
                optionA: "",
                optionB: "",
                optionC: "",
                optionD: ""
            })
    },[questionType])
    return (
        <div className="OptionsWrappper" onBlur={() => getOptions(optionsText)}>
            <div className={questionType === 1 ? "options-heading" : "options-heading-none"}>
                <p>Define Answer Options</p>
                <div className="options-list">
                    <div className="questioneer-options-fields">
                        <p>A)</p>
                        <input className="options-list-item" id="1" placeholder="Option A" name="optionA"
                            value={optionsText.optionA} onChange={handleChange}
                        />
                    </div>
                    <div className="questioneer-options-fields" >
                        <p>B)</p>
                        <input className="options-list-item" id="2" placeholder="Option B" name="optionB"
                            value={optionsText.optionB} onChange={handleChange}
                        />
                    </div>
                    <div className="questioneer-options-fields">
                        <p>C)</p>
                        <input className="options-list-item" id="3" placeholder="Option C" name="optionC"
                            value={optionsText.optionC} onChange={handleChange} />
                    </div>
                    <div className="questioneer-options-fields">
                        <p>D)</p>
                        <input className="options-list-item" id="4" placeholder="Option D" name="optionD"
                            value={optionsText.optionD} onChange={handleChange} />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default AddQuestioneerOptions;
