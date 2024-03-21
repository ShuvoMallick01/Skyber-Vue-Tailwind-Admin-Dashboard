<script setup lang="ts">
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "../../components/ui/dropdown-menu";
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger
      class="border-0 p-0 hover:bg-transparent"
      variant="outline"
      color="primary"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
      >
        <path
          d="M8.00007 15.7778C12.2956 15.7778 15.7778 12.2956 15.7778 8.00001C15.7778 3.70446 12.2956 0.222229 8.00007 0.222229C3.70452 0.222229 0.22229 3.70446 0.22229 8.00001C0.22229 12.2956 3.70452 15.7778 8.00007 15.7778Z"
          fill="#0E73BE"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M3.43875 1.69946L8.00011 6.26082L12.5615 1.69946C13.229 2.18355 13.8165 2.77112 14.3006 3.43863L9.73927 7.99998L14.3006 12.5613C13.8165 13.2288 13.229 13.8164 12.5615 14.3005L8.00011 9.73915L3.43875 14.3005C2.77124 13.8164 2.18367 13.2288 1.69958 12.5613L6.26094 7.99998L1.69958 3.43863C2.18367 2.77112 2.77124 2.18355 3.43875 1.69946Z"
          fill="white"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M14.1477 12.7651L10.1538 8.69131H8.80399L13.5181 13.4814C13.7421 13.2559 13.9525 13.0166 14.1477 12.7651ZM3.22377 14.1388L8.51867 8.77773H7.13595L2.4863 13.4855C2.71797 13.7184 2.96429 13.9366 3.22377 14.1388ZM13.509 2.50939L9.08039 6.97372H7.82731L12.8453 1.91528C13.0777 2.10064 13.2994 2.29905 13.509 2.50939ZM1.85986 3.2254L5.32478 6.70366H6.68421L2.49697 2.50369C2.27017 2.73077 2.05733 2.97181 1.85986 3.2254Z"
          fill="#E94B35"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M6.27167 0.414959V6.27161H0.41502C0.288886 6.82748 0.22229 7.40597 0.22229 8.00001C0.22229 8.59405 0.288886 9.17253 0.41502 9.7284H6.27167V15.5851C6.82754 15.7112 7.40603 15.7778 8.00007 15.7778C8.59411 15.7778 9.17259 15.7112 9.72846 15.5851V9.7284H15.5851C15.7112 9.17253 15.7778 8.59405 15.7778 8.00001C15.7778 7.40597 15.7112 6.82748 15.5851 6.27161H9.72846V0.414959C9.17259 0.288825 8.59411 0.222229 8.00007 0.222229C7.40603 0.222229 6.82754 0.288825 6.27167 0.414959Z"
          fill="white"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M6.70377 0.329768V6.70371H0.329829C0.259103 7.12528 0.22229 7.55834 0.22229 8.00001C0.22229 8.44167 0.259103 8.87474 0.329829 9.2963H6.70377V15.6702C7.12534 15.741 7.5584 15.7778 8.00007 15.7778C8.44173 15.7778 8.8748 15.741 9.29636 15.6702V9.2963H15.6703C15.741 8.87474 15.7778 8.44167 15.7778 8.00001C15.7778 7.55834 15.741 7.12528 15.6703 6.70371H9.29636V0.329768C8.8748 0.259042 8.44173 0.222229 8.00007 0.222229C7.5584 0.222229 7.12534 0.259042 6.70377 0.329768Z"
          fill="#E94B35"
        />
      </svg>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="start" class="rounded-lg border-0 w-24">
      <DropdownMenuItem variant="outline">English</DropdownMenuItem>
      <DropdownMenuItem variant="outline">Spanish</DropdownMenuItem>
      <DropdownMenuItem variant="outline">Bengali</DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
