import React, {usestate} from "react";

export default function Form({onSubmitFunc, movie}) {
    const [formData, setFormData] = usestate(book ?? {
        title: "",
        img_url: "",
        description: "",
        status: "",
    })
}

const handleChange = (event) => {
    setFormData({...formData, [event.target.name] : event.target.value});
    console.log(formData);
}

