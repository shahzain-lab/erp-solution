import ExpenseGraphReport from "@/components/dashboard/ExpenseGraphReport";
import LatestReceive from "@/components/dashboard/LatestReceive";
import SaleGraphReport from "@/components/dashboard/SaleGraphReport";
import Main from "@/layout/Main";
import { AiFillContainer } from 'react-icons/ai';
import { BiSolidPurchaseTagAlt } from 'react-icons/bi';
import { GiExpense } from 'react-icons/gi'


export default function Home() {
  return (
    <Main>
      <div className="w-[70%]">
        <div className="flex my-2 w-full gap-2">
          <LatestReceive Icon={AiFillContainer} title="Sale" percentage={25.5} rate="20,000" isDown={false} />
          <LatestReceive Icon={BiSolidPurchaseTagAlt} title="Purchase" percentage={39.2} rate="450,500" isDown={true} />
          <LatestReceive Icon={GiExpense} title="Expense" percentage={10.5} rate="10,200" isDown={false} />
        </div>
        <div className="flex gap-2">
          {/* <ExpenseGraphReport /> */}
          <SaleGraphReport />
        </div>
      </div>
    </Main>
  )
}
