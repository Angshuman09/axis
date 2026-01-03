

export const PdfViewer = ({ fileUrl }: { fileUrl: string }) => {
    return (
        <div>
            <iframe src={fileUrl + "#toolbar=0"} height="90vh" width="100%" className='border-none h-[90vh]' />
        </div>
    )
}