export default function DefaultTags({ title }: { title?: string }) {
    return (
        <>
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1"
            />
            <meta name="author" content="Mickael Rodrigues Felizardo" />
            <link href="/favicon.ico" rel="shortcut icon" />
            <title>{title ? `Next Movies - ${title}` : 'Next Movies'}</title>
        </>
    );
}
