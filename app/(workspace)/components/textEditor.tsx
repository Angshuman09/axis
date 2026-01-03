'use client'
import { EditorExtension } from './Editor-extension'
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Placeholder from '@tiptap/extension-placeholder'
import TextAlign from '@tiptap/extension-text-align'
import Underline from '@tiptap/extension-underline'
import Link from '@tiptap/extension-link'
import Image from '@tiptap/extension-image'
import Highlight from '@tiptap/extension-highlight'

export const TextEditor = () => {

    const editor = useEditor({
        extensions: [
            StarterKit.configure({
                underline: false,
                link: false,
            }),
            Placeholder.configure({
                placeholder: 'Start writing your amazing document...',
            }),
            TextAlign.configure({
                types: ['heading', 'paragraph'],
            }),
            Underline,
            Link.configure({
                openOnClick: false,
            }),
            Image,
            Highlight,
        ],
        editorProps: {
            attributes: {
                class: 'prose prose-slate max-w-none focus:outline-none min-h-[500px] px-8 py-6',
            },
        },
        content: '',
        immediatelyRender: false,
    })

    if (!editor) {
        return null
    }



    return (
        <div className='border border-slate-200 rounded-xl bg-white shadow-sm overflow-hidden flex flex-col h-full'>
            {/* Toolbar */}
            <EditorExtension editor={editor} />

            {/* Editor Area */}
            <div className="flex-1 overflow-y-auto custom-scrollbar bg-white">
                <EditorContent editor={editor} />
            </div>
        </div>
    )
}