import React, {usestate} from "react";

export default function Form({onSubmitFunc, movie}) {
    const [formData, setFormData] = usestate(book ?? {
        title: "",
        img_url: "",
        description: "",
        status: "",
    })

const handleChange = (event) => {
    setFormData({...formData, [event.target.name] : event.target.value});
    console.log(formData);
}

const submit = event => {
    event.preventDefault();
    onSubmitFunc(formData);
}

return(
    <div>
        <firm onSubmit={submit}>
            <input placeHolder="book title" onChange={handleChange} name="title" value={formData.title}></input>
            <input placeHolder="img url" onChange={handleChange} name="img_url" value={formData.img_url}></input>
            <input placeHolder="description" onChange={handleChange} name="description" value={formData.description}></input>
            <input placeHolder="status" onChange={handleChange} name="status" value={formData.status}></input>
        </firm>
    </div>
)
}