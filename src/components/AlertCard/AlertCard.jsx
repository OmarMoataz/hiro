import { Switch } from "@/components/Switch/Switch";

export function AlertCard() {
  return (
    <>
      <div>
        <h2> UI Designer in Egypt </h2> <span> 70 job positions </span>
      </div>
      <div className="flex items-center">
        <span className="inline-block me-2"> set alert </span>
        <Switch />
      </div>
    </>
  );
}
