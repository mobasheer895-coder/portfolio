import React, { useState } from 'react'
import HeadSection from '../HeadSection/HeadSection'
import { BiEnvelope, BiMap, BiPhoneCall } from 'react-icons/bi';
import Button from '../Button/Button';

const Contact = ({ contactRef }) => {
    const contactInfo = [
        {
            title: "Call me",
            value: "+96396900000",
            icon: <BiPhoneCall className="text-white text-2xl" />
        },
        {
            title: "Email me",
            value: "example@gmail.com",
            icon: <BiEnvelope className="text-white text-2xl" />
        },
        {
            title: "Address",
            value: "Damascus, Syria",
            icon: <BiMap className="text-white text-2xl" />
        }
    ];
    
    const formInputs = [
        {
            id: "fullName",
            type: "text",
            placeholder: "Full name",
            element: "input",
            className: "w-full md:w-[48%]" // يأخذ نصف المساحة في الشاشات الكبيرة
        },
        {
            id: "email",
            type: "email",
            placeholder: "Your email",
            element: "input",
            className: "w-full md:w-[48%]" // يأخذ النصف الآخر
        },
        {
            id: "phone",
            type: "tel",
            placeholder: "Phone number",
            element: "input",
            className: "w-full" // يأخذ السطر كاملاً
        },
        {
            id: "message",
            type: "text",
            placeholder: "Message",
            element: "textarea", // حددنا أنه تيكست ايريا
            className: "w-full"
        }
    ];
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        message: ''
    });
    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };
    const handleSubmit = (event) => {
    event.preventDefault();

    console.log(formData);
};
    return (
        <div ref={contactRef} id='Contact'>
            <HeadSection
                fullTitle="Contact"
                title="Let’s Discuss Your "
                completTitle="Project"
            />
            
            {/* الأب الأساسي مرتب أفقياً (flex-row) */}
            <div className='flex gap-12 py-7 justify-between max-sm:flex-col'>
                
                {/* الجانب الأيسر: معلومات الاتصال مرتبة عمودياً فوق بعضها (flex-col) */}
                <div className='flex flex-col gap-12'>
                    {contactInfo.map((info , index) => (
                        <div key={index} className="flex items-center gap-4">
                            {/* مربع الأيقونة الأزرق */}
                            <div className="w-14 h-14 bg-blue-600 flex justify-center items-center rounded-xl shadow-lg shrink-0">
                                {info.icon}
                            </div>
                            {/* النصوص المحاذية للأيقونة */}
                            <div className="flex flex-col">
                                <span className="text-gray-400 text-sm">{info.title}</span>
                                <span className="font-medium mt-0.5">{info.value}</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* الجانب الأيمن: فورم الاتصال */}
                <div>
                    <form className='flex flex-wrap gap-4 justify-between max-w-2xl' onSubmit={handleSubmit}>
                        {/* 2. عمل الـ map لقراءة المصفوفة */}
            {formInputs.map((input) => {
                // الكلاسات المشتركة لجميع الحقول لتجنب التكرار
                const baseStyle = " border border-gray-700 rounded-lg p-4 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:border-2 hover:border-blue-500";

                if (input.element === "textarea") {
                    return (
                        <textarea
                            key={input.id}
                            name={input.id}
                            placeholder={input.placeholder}
                            rows="5"
                            value={formData[input.id]}
                            onChange={handleChange}
                            className={`${baseStyle} ${input.className} resize-none`}
                        />
                    );
                }

                return (
                    <input
                        key={input.id}
                        type={input.type}
                        name={input.id}
                        placeholder={input.placeholder}
                        value={formData[input.id]}
                        onChange={handleChange}
                        className={`${baseStyle} ${input.className}`}
                        required
                    />
                );
            })}
            
                    <Button btnContent="Send Message"/>
                    </form>
                </div>

            </div>
        </div>
    )
}

export default Contact