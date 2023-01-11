import { Skeleton } from './components/feedback/Skeleton/Skeleton';

export default function Loading() {
    return (
        <div style={{ marginLeft: 64 }}>
            <Skeleton height="648px" />
            <div style={{ marginTop: 24 }}>
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(6, auto)',
                    }}
                >
                    <Skeleton height="440px" width="292px" />
                    <Skeleton height="440px" width="292px" />
                    <Skeleton height="440px" width="292px" />
                    <Skeleton height="440px" width="292px" />
                    <Skeleton height="440px" width="292px" />
                    <Skeleton height="440px" width="292px" />
                </div>
            </div>
        </div>
    );
}
