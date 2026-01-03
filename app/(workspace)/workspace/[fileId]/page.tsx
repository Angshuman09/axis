'use client'

import { useParams } from 'next/navigation'
import { WorkspaceHeader } from '../../components/workspace-header';
import { useQuery } from 'convex/react';
import { api } from '@/convex/_generated/api';
import { useEffect } from 'react';
import { PdfViewer } from '../../components/PdfViewer';
import { TextEditor } from '../../components/textEditor';

import { Group as PanelGroup, Panel, Separator as PanelResizeHandle } from 'react-resizable-panels';

const Workspace = () => {
  const { fileId } = useParams();
  const getFileRecord = useQuery(api.fileStorage.getFileData,
    { fileId: fileId as string }
  );

  useEffect(() => {
    if (getFileRecord) {
      console.log(getFileRecord[0]);
    }
  }, [getFileRecord])

  return (
    <div className='flex flex-col h-[calc(100vh-(--spacing(16)))]'>
      <WorkspaceHeader />

      <div className='h-full overflow-hidden p-4'>
        <PanelGroup orientation="horizontal">
          {/* Text Editor Panel */}
          <Panel defaultSize={50} minSize={20} className='bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden'>
            <TextEditor />
          </Panel>

          {/* Resize Handle */}
          <PanelResizeHandle className='w-2 bg-transparent hover:bg-slate-50 transition-colors flex items-center justify-center cursor-col-resize group outline-none'>
            <div className='h-8 w-1 bg-slate-200 rounded-full group-hover:bg-slate-400 transition-colors' />
          </PanelResizeHandle>

          {/* PDF Viewer Panel */}
          <Panel defaultSize={50} minSize={20} className='bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden'>
            <PdfViewer fileUrl={getFileRecord?.[0]?.fileUrl as string} />
          </Panel>
        </PanelGroup>
      </div>
    </div>
  )
}

export default Workspace