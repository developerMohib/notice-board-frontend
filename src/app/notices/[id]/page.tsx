import NoticeDetails from '@/components/pages/NoticeDetails';

interface Props {
  params: { 
    id: string 
  }
}

const Page = ({ params }: Props) => {
  return <NoticeDetails id={params.id} />;
};

export default Page;
