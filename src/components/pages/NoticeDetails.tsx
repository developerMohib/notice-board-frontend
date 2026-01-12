"use client";
import { useOneNoticeDetails } from '@/hooks/useGetNoticeAll';
import { useParams } from 'next/navigation';
interface NoticeDetailsProps {
  id: string; 
}
const NoticeDetails = ({ id }: NoticeDetailsProps) => {
    const params = useParams();
    const noticeId = params?.id as string | undefined;
    const { data, isLoading } = useOneNoticeDetails(noticeId || '');
    const noticeData = data?.data;
console.log('Notice ID:', id);
    
    if (isLoading) return <p>Loading...</p>;

    if (!noticeId || !data) {
        return <p>Invalid Notice ID</p>;
    }

    return (
        <div>
            <p>employee Name: {noticeData?.employeeName}</p>
            <p>ID: {noticeId}</p>
            {/* Render notice data */}
        </div>
    );
};

export default NoticeDetails;