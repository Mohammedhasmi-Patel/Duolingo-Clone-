import { Button } from "@/components/ui/button";

export default function ButtonsPage() {
  return (
    <div className="p-4 space-y-4 flex flex-col max-w-[200px]">
      <Button>Primary</Button>
      <Button variant="primary">Primary Outline</Button>
      <Button variant="primaryOutline">Primary Outline</Button>
      <Button variant="secondary">Secondary Outline</Button>
      <Button variant="danger">Secondary Outline</Button>
      <Button variant="dangerOutline">Secondary Outline</Button>

      <Button variant="super">Secondary Outline</Button>
      <Button variant="superOutline">Secondary Outline</Button>
    </div>
  );
}
