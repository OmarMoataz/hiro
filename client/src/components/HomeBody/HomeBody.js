import { AlertCard } from "@/components/AlertCard/AlertCard";
import { JobCard } from "@/components/JobCard/JobCard";

export function HomeBody() {
  return (
    <div className="grow-1 mt-10 mx-4">
      <div className="flex   grow-1 items-center p-4 justify-between bg-green-600 mb-4 text-white">
        <AlertCard />
      </div>
      <JobCard
        companyLogo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZI78WvDPQ241thhVYKtVphlc_J01LbnFVqA&s"
        companyName="Google"
        jobTitle="Senior Software Engineer"
        location="Cairo, Egypt"
        timeSincePosted="10 days ago"
      />

      <JobCard
        companyLogo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZI78WvDPQ241thhVYKtVphlc_J01LbnFVqA&s"
        companyName="Google"
        jobTitle="Senior Software Engineer"
        location="Cairo, Egypt"
        timeSincePosted="10 days ago"
        styles="mt-4"
      />
      <JobCard
        companyLogo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZI78WvDPQ241thhVYKtVphlc_J01LbnFVqA&s"
        companyName="Google"
        jobTitle="Senior Software Engineer"
        location="Cairo, Egypt"
        timeSincePosted="10 days ago"
        styles="mt-4"
      />
      <JobCard
        companyLogo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZI78WvDPQ241thhVYKtVphlc_J01LbnFVqA&s"
        companyName="Google"
        jobTitle="Senior Software Engineer"
        location="Cairo, Egypt"
        timeSincePosted="10 days ago"
        styles="mt-4"
      />
    </div>
  );
}
