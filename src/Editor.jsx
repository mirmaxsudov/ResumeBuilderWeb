import React from 'react'
import { EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Underline from '@tiptap/extension-underline'
import Strike from '@tiptap/extension-strike'
import Link from '@tiptap/extension-link'
import BulletList from '@tiptap/extension-bullet-list'
import OrderedList from '@tiptap/extension-ordered-list'
import ListItem from '@tiptap/extension-list-item'

function TiptapEditor() {
    const editor = useEditor({
        extensions: [
            StarterKit,
            Underline,
            Strike,
            Link.configure({ openOnClick: true }),
            BulletList,
            OrderedList,
            ListItem,
        ],
        content: `<p>Hello, Tiptap with Tailwind!</p>`,
    })

    if (!editor)
        return null

    const setLink = () => {
        const url = window.prompt('Enter URL')
        if (url) {
            editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run()
        } else {
            editor.chain().focus().unsetLink().run()
        }
    }

    // A helper to get the right styling for active buttons
    const buttonClass = (isActive) => {
        return isActive
            ? 'px-2 py-1 border rounded bg-blue-500 text-white'
            : 'px-2 py-1 border rounded bg-white text-gray-800'
    }

    return (
        <div className="max-w-lg mx-auto mt-6 p-4 border rounded shadow-sm space-y-3 bg-white">
            {/* --- Toolbar --- */}
            <div className="flex flex-wrap gap-2">
                <button
                    onClick={() => editor.chain().focus().toggleBold().run()}
                    className={buttonClass(editor.isActive('bold'))}
                >
                    Bold
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleItalic().run()}
                    className={buttonClass(editor.isActive('italic'))}
                >
                    Italic
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleUnderline().run()}
                    className={buttonClass(editor.isActive('underline'))}
                >
                    Underline
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleStrike().run()}
                    className={buttonClass(editor.isActive('strike'))}
                >
                    Strikethrough
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleBulletList().run()}
                    className={buttonClass(editor.isActive('bulletList'))}
                >
                    • Bulleted List
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleOrderedList().run()}
                    className={buttonClass(editor.isActive('orderedList'))}
                >
                    1. Ordered List
                </button>
                <button onClick={setLink} className="px-2 py-1 border rounded bg-white text-gray-800">
                    Link
                </button>
            </div>

            {/* --- Editor Content --- */}
            <div className="border p-2 rounded min-h-[200px]">
                <EditorContent editor={editor} />
            </div>
        </div>
    )
}

export default TiptapEditor;