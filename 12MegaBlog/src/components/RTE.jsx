import React from 'react'
import { Editor } from '@tinymce/tinymce-react';
import { Controller } from 'react-hook-form';

// control i scoming from react-hook-form(line 6)
export default function RTE({ name, control, label, defaultValue = "" }) {
    return (
        <div className='w-full'>
            {label && <label className='inline-block mb-1 pl-1'>{label}</label>}

            {/* we can pass many thing in controller components like name, control,etc */}
            <Controller name={name || "content"} control={control}
                render={({ field: { onChange } }) => (
                    <Editor initialValue={defaultValue} init={
                        {
                            initialValue: defaultValue, height: 500, menubar: true,
                            plugins: ["image", "advlist", "autolink", "lists", "link", "image", "charmap", "preview", "anchor", "searchreplace", "visualblocks", "code", "fullscreen", "insertdatetime", "media", "table", "code", "help", "wordcount", "anchor",
                            ],
                            toolbar:
                                "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |removeformat | help",
                            content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }"
                        }}
                        // any changes in editor is alert or governed by onChange()
                        onEditorChange={onChange} 
                        />
                )}
            />

        </div>
    )
}



// EDITOR-

// Editor: This is the main component from the TinyMCE React package. By importing it, you can use this Editor component in your React application to add a rich text editor to your web pages.
// A rich text editor allows users to format text (like making it bold, adding links, changing colors, etc.) similar to what you see in word processors like Microsoft Word.


// CONTROLLER

// react-hook-form: This is a library for managing forms in React applications. It helps you handle form inputs, validations, and submissions in a more efficient and less code-heavy way.

// Controller: This component is used when you want to integrate third-party UI components (like a date picker, slider, or custom input) with react-hook-form. The Controller acts as a bridge between react-hook-form and these components, making sure they work well together.


// SUMMARY

// In simple terms, by importing Controller, you're getting a tool that lets you connect non-standard form elements to react-hook-form, so you can still manage the form data and validation smoothly.