interface PostProps {
  params: {
    id: string;
  };
}

export default function Post({ params }: PostProps) {
  const { id } = params;
  return <h1>Post ID: {id}</h1>;
}
