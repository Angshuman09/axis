import React from 'react'
import { Editor } from '@tiptap/react'
import { Bold, Italic, Underline as UnderlineIcon, AlignLeft, AlignCenter, AlignRight, List, ListOrdered, Heading1, Heading2, Heading3, Highlighter, Code } from 'lucide-react'
interface EditorExtensionProps {
    editor: Editor
}

export const EditorExtension = ({ editor }: EditorExtensionProps) => {
    const ToolbarButton = ({
        onClick,
        isActive = false,
        children
    }: {
        onClick: () => void
        isActive?: boolean
        children: React.ReactNode
    }) => {
        return (
            <button
                onClick={onClick}
                className={`p-1 rounded hover:bg-slate-100 transition-colors ${isActive ? 'bg-slate-100' : ''}`}
            >
                {children}
            </button>
        )
    }


    return (
        <div className='border-b border-slate-200 bg-white p-2 flex items-center gap-1 flex-wrap sticky top-0 z-10'>
            <ToolbarButton
                onClick={() => editor.chain().focus().toggleBold().run()}
                isActive={editor.isActive('bold')}
            >
                <Bold className={`w-4 h-4 ${editor.isActive('bold') ? 'text-blue-500' : ''}`} />
            </ToolbarButton>
            <ToolbarButton
                onClick={() => editor.chain().focus().toggleItalic().run()}
                isActive={editor.isActive('italic')}
            >
                <Italic className={`w-4 h-4 ${editor.isActive('italic') ? 'text-amber-500' : ''}`} />
            </ToolbarButton>
            <ToolbarButton
                onClick={() => editor.chain().focus().toggleUnderline().run()}
                isActive={editor.isActive('underline')}
            >
                <UnderlineIcon className={`w-4 h-4 ${editor.isActive('underline') ? 'text-blue-500' : ''}`} />
            </ToolbarButton>
            <ToolbarButton
                onClick={() => editor.chain().focus().toggleHighlight({ color: '#FFD700' }).run()}
                isActive={editor.isActive('highlight')}
            >
                <Highlighter className={`w-4 h-4 ${editor.isActive('highlight') ? 'text-yellow-500' : ''}`} />
            </ToolbarButton>

            <div className="w-px h-6 bg-slate-200 mx-1" />

            <ToolbarButton
                onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
                isActive={editor.isActive('heading', { level: 1 })}
            >
                <Heading1 className={`w-4 h-4 ${editor.isActive('heading', { level: 1 }) ? 'text-blue-500' : ''}`} />
            </ToolbarButton>
            <ToolbarButton
                onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
                isActive={editor.isActive('heading', { level: 2 })}
            >
                <Heading2 className={`w-4 h-4 ${editor.isActive('heading', { level: 2 }) ? 'text-blue-500' : ''}`} />
            </ToolbarButton>
            <ToolbarButton
                onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
                isActive={editor.isActive('heading', { level: 3 })}
            >
                <Heading3 className={`w-4 h-4 ${editor.isActive('heading', { level: 3 }) ? 'text-blue-500' : ''}`} />
            </ToolbarButton>

            <div className="w-px h-6 bg-slate-200 mx-1" />

            <ToolbarButton
                onClick={() => editor.chain().focus().setTextAlign('left').run()}
                isActive={editor.isActive({ textAlign: 'left' })}
            >
                <AlignLeft className={`w-4 h-4 ${editor.isActive({ textAlign: 'left' }) ? 'text-blue-500' : ''}`} />
            </ToolbarButton>
            <ToolbarButton
                onClick={() => editor.chain().focus().setTextAlign('center').run()}
                isActive={editor.isActive({ textAlign: 'center' })}
            >
                <AlignCenter className={`w-4 h-4 ${editor.isActive({ textAlign: 'center' }) ? 'text-blue-500' : ''}`} />
            </ToolbarButton>
            <ToolbarButton
                onClick={() => editor.chain().focus().setTextAlign('right').run()}
                isActive={editor.isActive({ textAlign: 'right' })}
            >
                <AlignRight className={`w-4 h-4 ${editor.isActive({ textAlign: 'right' }) ? 'text-blue-500' : ''}`} />
            </ToolbarButton>

            <div className="w-px h-6 bg-slate-200 mx-1" />

            <ToolbarButton
                onClick={() => editor.chain().focus().toggleBulletList().run()}
                isActive={editor.isActive('bulletList')}
            >
                <List className={`w-4 h-4 ${editor.isActive('bulletList') ? 'text-blue-500' : ''}`} />
            </ToolbarButton>
            <ToolbarButton
                onClick={() => editor.chain().focus().toggleOrderedList().run()}
                isActive={editor.isActive('orderedList')}
            >
                <ListOrdered className={`w-4 h-4 ${editor.isActive('orderedList') ? 'text-blue-500' : ''}`} />
            </ToolbarButton>
        </div>
    )
}
