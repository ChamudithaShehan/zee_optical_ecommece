import CustomizePage from "@/views/Customize";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ frame?: string }>;
}) {
  const params = await searchParams;
  return <CustomizePage initialFrameId={params.frame} />;
}
