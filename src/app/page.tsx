import ExpenseGraphReport from "@/components/dashboard/ExpenseGraphReport";
import LatestReceive from "@/components/dashboard/LatestReceive";
import SaleGraphReport from "@/components/dashboard/SaleGraphReport";
import Main from "@/layout/Main";


export default function Home() {
  return (
    <Main>
      <div className="w-[70%]">
        <div className="flex gap-2">
          <ExpenseGraphReport />
          <SaleGraphReport />
        </div>
        <div className="flex my-2 w-full gap-2">
          <LatestReceive title="You'll receive" isDown={false} />
          <LatestReceive title="You'll pay" isDown={true} />
          <LatestReceive title="Purchase" isDown={false} />
        </div>
      </div>
    </Main>
  )
}
