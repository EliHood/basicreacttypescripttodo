import * as React from 'react';


interface formProps {
    onSubmit(event: any): void;
    onChange(event: any): void;
    currentTask: string;    
}

const Form = (props: formProps) => {
    return(
        <div>
            <form onSubmit={props.onSubmit}>
                <input value={props.currentTask} type="text" placeholder="enter a todo"
                onChange={props.onChange} required/>
                <button type="submit"> Add Todo</button>
            </form>
        </div>
    )

}

export default Form;