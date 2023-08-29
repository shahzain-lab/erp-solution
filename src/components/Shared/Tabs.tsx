import { useState } from 'react'
import { Tab } from '@headlessui/react'
import { cn } from '@/lib/cn';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

interface Props {
  tabNodes: {name: React.ReactNode | string; class?: string}[];
  panelNodes: React.ReactNode[];
  className?: string
}

export default function TabPanel({ tabNodes, panelNodes, className }: Props) {

  return (
    <div className={cn(`w-full `, className)} >
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
          {tabNodes.map((node, id) => (
            <Tab
              key={id}
              className={({ selected }) =>
                classNames(
                  'w-full rounded-lg py-2 text-sm font-medium leading-5 text-blue-700',
                  `ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2 ${node.class}`,
                  selected
                    ? 'bg-white shadow'
                    : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                )
              }
            >
              {node.name}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2 w-full">
          {panelNodes.map((node: any, idx: number) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                'rounded-xl bg-white p-3 w-full',
                'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
              )}
            >
                {node}
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}
