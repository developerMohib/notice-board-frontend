import NoticeDetails from '@/components/pages/NoticeDetails';

const page = ({
  params
}: {
  params: { category: string; id: string }
}) => {
    return (
        <div>
            <NoticeDetails params={params}   />
        </div>
    );
};

export default page;