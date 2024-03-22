export const menuSidebar: any = [
  {
    name: "DASHBOARD",
    menuItems: [
      {
        icon: `<svg class="" width="16" height="16" fill="#DCE5F0" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.50008 1C6.32822 1 7.0001 1.67156 7.0001 2.5V7.5C7.0001 8.32812 6.32822 9 5.50008 9H2.50003C1.67157 9 1 8.32812 1 7.5V2.5C1 1.67156 1.67157 1 2.50003 1H5.50008ZM5.50008 11C6.32822 11 7.0001 11.6719 7.0001 12.5V13.5C7.0001 14.3281 6.32822 15 5.50008 15H2.50003C1.67157 15 1 14.3281 1 13.5V12.5C1 11.6719 1.67157 11 2.50003 11H5.50008Z" fill="#738499"/>
<path d="M13.5001 1C14.3282 1 15.0001 1.67156 15.0001 2.5V3.5C15.0001 4.32812 14.3282 5 13.5001 5H10.5C9.67189 5 9 4.32812 9 3.5V2.5C9 1.67156 9.67189 1 10.5 1H13.5001ZM13.5001 7C14.3282 7 15.0001 7.67188 15.0001 8.5V13.5C15.0001 14.3281 14.3282 15 13.5001 15H10.5C9.67189 15 9 14.3281 9 13.5V8.5C9 7.67188 9.67189 7 10.5 7H13.5001Z" />
</svg>
`,
        label: "Learning Management",
        route: "/",
        children: [
          {
            label: "Analytics",
            route: "/",
          },
          {
            label: "Marketing",
            route: "/marketing",
          },
          {
            label: "CRM & Stocks",
            route: "/crm-stocks",
          },
        ],
      },
      {
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <g clip-path="url(#clip0_571_4305)">
    <path d="M8 7.99999C10.0619 7.99999 11.7333 6.32852 11.7333 4.26666C11.7333 2.2048 10.0619 0.533325 8 0.533325C5.93813 0.533325 4.26666 2.2048 4.26666 4.26666C4.26666 6.32852 5.93813 7.99999 8 7.99999Z" fill="#E9EFF6"/>
    <path d="M0.53334 13.2267V13.9733C0.53334 14.7981 1.27622 15.4667 2.1926 15.4667H13.8074C14.7238 15.4667 15.4667 14.7981 15.4667 13.9733V13.2267C15.4667 11.1648 13.6095 9.49335 11.3185 9.49335H4.68149C2.39053 9.49335 0.53334 11.1648 0.53334 13.2267Z" fill="#738499"/>
  </g>
  <defs>
    <clipPath id="clip0_571_4305">
      <rect width="16" height="16" fill="white"/>
    </clipPath>
  </defs>
</svg>
`,
        label: "Job Management",
        route: "/job-management",
      },
      {
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <g clip-path="url(#clip0_571_4311)">
    <path d="M15.6801 2.45759V9.49759C15.6801 9.72159 15.4945 9.90719 15.2705 9.90719H11.4113V2.45759C11.4113 1.86239 11.6545 1.33759 12.0385 0.953587C12.4289 0.563187 12.9537 0.326387 13.5425 0.326387C14.7265 0.319987 15.6801 1.27999 15.6801 2.45759Z" fill="#738499"/>
    <path d="M13.5423 0.320007C12.9471 0.320007 12.4223 0.563207 12.0383 0.947207C11.6479 1.33761 11.4111 1.86241 11.4111 2.45121V15.264C11.4111 15.488 11.2255 15.6736 11.0015 15.6736H0.729546C0.505546 15.6736 0.319946 15.488 0.319946 15.264V2.45761C0.319946 1.28001 1.27355 0.320007 2.45755 0.320007H13.5423Z" fill="#E9EFF6"/>
    <path d="M8.4416 12.8896H3.2896C2.7584 12.8896 2.32961 12.4608 2.32961 11.9296C2.32961 11.3984 2.7584 10.9696 3.2896 10.9696H8.4416C8.9728 10.9696 9.4016 11.3984 9.4016 11.9296C9.4016 12.4608 8.9664 12.8896 8.4416 12.8896ZM8.4416 8.96001H3.2896C2.7584 8.96001 2.32961 8.53121 2.32961 8.00001C2.32961 7.46881 2.7584 7.04001 3.2896 7.04001H8.4416C8.9728 7.04001 9.4016 7.46881 9.4016 8.00001C9.4016 8.53121 8.9664 8.96001 8.4416 8.96001ZM8.4416 5.03041H3.2896C2.7584 5.03041 2.32961 4.60161 2.32961 4.07041C2.32961 3.53921 2.7584 3.11041 3.2896 3.11041H8.4416C8.9728 3.11041 9.4016 3.53921 9.4016 4.07041C9.4016 4.60161 8.9664 5.03041 8.4416 5.03041Z" fill="#738499"/>
  </g>
  <defs>
    <clipPath id="clip0_571_4311">
      <rect width="16" height="16" fill="white"/>
    </clipPath>
  </defs>
</svg>
`,
        label: "Sales",
        route: "/sales",
      },
      {
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M8.37444 6.7074V1C9.87834 1.08021 11.3159 1.64471 12.4726 2.60923L8.37444 6.7074Z" fill="#E9EFF6"/>
  <path d="M12.4726 13.3712C11.316 14.3357 9.87837 14.9002 8.37447 14.9804C7.94779 15.002 7.52004 14.9856 7.09628 14.9314C5.78067 14.7623 4.5407 14.221 3.52225 13.3712C3.35878 13.2363 3.20143 13.0922 3.05021 12.939C2.899 12.7857 2.75493 12.6284 2.61802 12.4669C1.57246 11.21 1 9.62669 1 7.99175C1 6.35681 1.57246 4.77347 2.61802 3.51656C2.75289 3.35308 2.89695 3.19573 3.05021 3.04452C3.20347 2.8933 3.36082 2.74924 3.52225 2.61232C4.54035 1.7614 5.78034 1.21904 7.09628 1.04907V7.99481L12.4726 13.3712Z" fill="#738499"/>
  <path d="M13.3769 12.4638L8.91699 7.99478L13.3922 3.51959C14.434 4.77784 15.0028 6.36091 15 7.99449C14.9972 9.62806 14.423 11.2092 13.3769 12.4638Z" fill="#E9EFF6"/>
</svg>
`,
        label: "Analytic",
        route: "/analytic",
      },
      {
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M3.19999 3.20001C1.98497 3.20001 1 4.18498 1 5.4V13.4C1 14.615 1.98497 15.6 3.19999 15.6H9.59997C10.815 15.6 11.8 14.615 11.8 13.4V5.4C11.8 4.18498 10.815 3.20001 9.59997 3.20001H3.19999Z" fill="#E9EFF6"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M4.20003 2.19999C4.20003 0.984973 5.185 0 6.40002 0H12.8C14.015 0 15 0.984973 15 2.19999V10.2C15 11.415 14.015 12.4 12.8 12.4H11.8V5.39998C11.8 4.18496 10.815 3.19999 9.60001 3.19999H4.20003V2.19999ZM3.80003 8.19997C3.80003 7.20589 4.60592 6.39998 5.60003 6.39998H5.80003V6.19998C5.80003 5.86861 6.06866 5.59998 6.40002 5.59998C6.73138 5.59998 7.00002 5.86861 7.00002 6.19998V6.39998H8.00002C8.33138 6.39998 8.60002 6.66862 8.60002 6.99998C8.60002 7.33133 8.33138 7.59997 8.00002 7.59997H6.40002H5.60003C5.26866 7.59997 5.00003 7.86861 5.00003 8.19997C5.00003 8.53133 5.26866 8.79997 5.60003 8.79997H7.20002C8.1941 8.79997 9.00002 9.60589 9.00002 10.6C9.00002 11.594 8.1941 12.4 7.20002 12.4H7.00002V12.6C7.00002 12.9313 6.73138 13.2 6.40002 13.2C6.06866 13.2 5.80003 12.9313 5.80003 12.6V12.4H4.80003C4.46866 12.4 4.20003 12.1313 4.20003 11.8C4.20003 11.4686 4.46866 11.2 4.80003 11.2H6.40002H7.20002C7.53138 11.2 7.80002 10.9313 7.80002 10.6C7.80002 10.2686 7.53138 9.99996 7.20002 9.99996H5.60003C4.60592 9.99996 3.80003 9.19405 3.80003 8.19997Z" fill="#738499"/>
</svg>
`,
        label: "crypto-currency",
        route: "/crypto-currency",
      },
      {
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M0.625 8.63411V13.7729C0.625 14.418 1.14788 14.9408 1.7929 14.9408H14.2071C14.8521 14.9408 15.375 14.418 15.375 13.7729V8.63411H0.625ZM3.14909 13.0242C3.14909 13.324 2.90609 13.567 2.60633 13.567C2.30658 13.567 2.06358 13.324 2.06358 13.0242V11.8709C2.06358 11.5711 2.30658 11.3281 2.60633 11.3281C2.90609 11.3281 3.14909 11.5711 3.14909 11.8709V13.0242ZM6.74487 13.0242C6.74487 13.324 6.50187 13.567 6.20211 13.567C5.90235 13.567 5.65935 13.324 5.65935 13.0242V11.8709C5.65935 11.5711 5.90235 11.3281 6.20211 11.3281C6.50187 11.3281 6.74487 11.5711 6.74487 11.8709V13.0242ZM10.3406 13.0242C10.3406 13.324 10.0976 13.567 9.79788 13.567C9.49813 13.567 9.25513 13.324 9.25513 13.0242V11.8709C9.25513 11.5711 9.49813 11.3281 9.79788 11.3281C10.0976 11.3281 10.3406 11.5711 10.3406 11.8709V13.0242ZM13.9364 13.0242C13.9364 13.324 13.6934 13.567 13.3937 13.567H13.3937C13.0939 13.567 12.8509 13.324 12.8509 13.0242V11.8709C12.8509 11.5711 13.0939 11.3281 13.3937 11.3281H13.3937C13.6934 11.3281 13.9364 11.5711 13.9364 11.8709V13.0242ZM13.4806 5.67125C13.3197 5.48137 13.0827 5.37131 12.8335 5.37131H10.1618C10.0873 5.44513 10.0109 5.51894 9.93063 5.59276C9.92406 5.59877 9.60246 5.88582 9.21205 6.18497H11.3975C11.6154 6.18497 11.7921 6.36162 11.7921 6.57953C11.7921 6.79744 11.6154 6.97408 11.3975 6.97408H4.60246C4.38456 6.97408 4.20791 6.79744 4.20791 6.57953C4.20791 6.36162 4.38456 6.18497 4.60246 6.18497H6.7882C6.39772 5.88582 6.07609 5.59877 6.06952 5.59276C5.98926 5.51894 5.91281 5.44513 5.83837 5.37131H3.16528C2.91734 5.37131 2.68029 5.48137 2.51944 5.67125L1.03546 7.78776H14.9645L13.4806 5.67125Z" fill="#738499"/>
  <path d="M10.968 2.60304C10.968 4.51828 8.0905 6.24878 8.00031 6.24878C7.90949 6.24878 5.03195 4.51828 5.03195 2.60304C5.03195 1.55304 6.00108 1.05914 6.76681 1.05914C7.20161 1.05914 7.63641 1.22461 7.96796 1.55615L8.00031 1.58912L8.03203 1.55615C8.36357 1.22461 8.79838 1.05914 9.23318 1.05914C9.99891 1.05914 10.968 1.55304 10.968 2.60304Z" fill="#E9EFF6"/>
</svg>
`,
        label: "Donation",
        route: "/donation",
      },
    ],
  },
  {
    name: "CUSTOM",
    menuItems: [
      {
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M12 0.5H4C3.17157 0.5 2.5 1.17157 2.5 2V14C2.5 14.8284 3.17157 15.5 4 15.5H12C12.8284 15.5 13.5 14.8284 13.5 14V2C13.5 1.17157 12.8284 0.5 12 0.5Z" fill="#E9EFF6"/>
  <path d="M5.145 0.5L5.275 1.39C5.27279 1.41829 5.27279 1.44671 5.275 1.475C5.37583 1.77714 5.57022 2.03933 5.83002 2.22362C6.08981 2.4079 6.40152 2.5047 6.72 2.5H9.28C9.59118 2.5012 9.89503 2.40559 10.1495 2.22642C10.4039 2.04725 10.5963 1.79338 10.7 1.5C10.7106 1.47239 10.719 1.44396 10.725 1.415L10.855 0.5H5.145Z" fill="#738499"/>
  <path d="M8 11.5C9.933 11.5 11.5 9.933 11.5 8C11.5 6.067 9.933 4.5 8 4.5C6.067 4.5 4.5 6.067 4.5 8C4.5 9.933 6.067 11.5 8 11.5Z" fill="#738499"/>
  <path d="M9.5 14H6.5C6.36739 14 6.24021 13.9473 6.14645 13.8536C6.05268 13.7598 6 13.6326 6 13.5C6 13.3674 6.05268 13.2402 6.14645 13.1464C6.24021 13.0527 6.36739 13 6.5 13H9.5C9.63261 13 9.75979 13.0527 9.85355 13.1464C9.94732 13.2402 10 13.3674 10 13.5C10 13.6326 9.94732 13.7598 9.85355 13.8536C9.75979 13.9473 9.63261 14 9.5 14Z" fill="#738499"/>
  <path d="M7.67501 9.24999C7.60801 9.25038 7.54162 9.2373 7.47978 9.21153C7.41794 9.18577 7.3619 9.14783 7.31501 9.09999L6.50001 8.26999C6.45437 8.22271 6.4185 8.16691 6.39443 8.10577C6.37036 8.04463 6.35857 7.97935 6.35973 7.91365C6.36089 7.84795 6.37498 7.78313 6.40119 7.72287C6.42741 7.66262 6.46523 7.60812 6.51251 7.56249C6.55978 7.51685 6.61558 7.48098 6.67672 7.45691C6.73786 7.43284 6.80315 7.42105 6.86884 7.42221C6.93454 7.42337 6.99937 7.43746 7.05962 7.46367C7.11987 7.48989 7.17437 7.52771 7.22001 7.57499L7.66001 8.02999L8.75001 6.89999C8.79597 6.85074 8.85118 6.81103 8.91249 6.78312C8.9738 6.75522 9.04001 6.73966 9.10733 6.73733C9.17465 6.73501 9.24177 6.74597 9.30486 6.76959C9.36794 6.79321 9.42576 6.82902 9.47501 6.87499C9.52425 6.92095 9.56396 6.97616 9.59187 7.03747C9.61978 7.09878 9.63534 7.16499 9.63766 7.23231C9.63998 7.29963 9.62902 7.36675 9.6054 7.42984C9.58178 7.49292 9.54597 7.55074 9.50001 7.59999L8.05001 9.09999C8.00137 9.14969 7.9429 9.18871 7.87833 9.21454C7.81376 9.24036 7.74451 9.25244 7.67501 9.24999Z" fill="#E9EFF6"/>
</svg>
`,
        label: "Apps",
        route: "/app",
        children: [
          {
            label: "Analytics",
            route: "/learning-management/analytics",
          },
          {
            label: "Marketing",
            route: "/learning-management/marketing",
          },
          {
            label: "CRM & Stocks",
            route: "/learning-management/crm-stocks",
          },
        ],
      },
      {
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M14.4 9.60001V12.5333C14.4 12.9733 14.04 13.3333 13.6 13.3333H2.40001C1.96001 13.3333 1.60001 12.9733 1.60001 12.5333V9.60001H5.60001V10.1333C5.60001 10.5733 5.96001 10.9333 6.40001 10.9333H9.60001C10.04 10.9333 10.4 10.5733 10.4 10.1333V9.60001H14.4ZM10.9333 3.73334V3.46667H12C12.112 3.46667 12.2107 3.53601 12.248 3.63734L14.3147 9.06668H12.8V7.73334C12.8 7.38668 12.576 7.09334 12.2667 6.98134V6.13334C12.2667 5.78667 12.0427 5.49334 11.7333 5.38134V4.53334C11.7333 4.09334 11.3733 3.73334 10.9333 3.73334ZM5.06667 3.46667V3.73334C4.62667 3.73334 4.26667 4.09334 4.26667 4.53334V5.38134C3.95734 5.49334 3.73334 5.78667 3.73334 6.13334V6.98134C3.42401 7.09334 3.20001 7.38668 3.20001 7.73334V9.06668H1.68534L3.75201 3.63734C3.78934 3.53601 3.88801 3.46667 4.00001 3.46667H5.06667Z" fill="#E9EFF6"/>
  <path d="M6.4 10.4H9.6C9.74667 10.4 9.86667 10.28 9.86667 10.1333V9.33332C9.86667 9.18666 9.98667 9.06666 10.1333 9.06666H12.2667V7.73332C12.2667 7.58666 12.1467 7.46666 12 7.46666H4C3.85334 7.46666 3.73334 7.58666 3.73334 7.73332V9.06666H5.86667C6.01334 9.06666 6.13334 9.18666 6.13334 9.33332V10.1333C6.13334 10.28 6.25334 10.4 6.4 10.4ZM11.4667 5.86666H4.53334C4.38667 5.86666 4.26667 5.98666 4.26667 6.13332V6.93332H11.7333V6.13332C11.7333 5.98666 11.6133 5.86666 11.4667 5.86666ZM10.4 2.93332C10.4 2.78666 10.28 2.66666 10.1333 2.66666H5.86667C5.72 2.66666 5.6 2.78666 5.6 2.93332V3.73332H10.4V2.93332ZM4.8 4.53332V5.33332H11.2V4.53332C11.2 4.38666 11.08 4.26666 10.9333 4.26666H5.06667C4.92 4.26666 4.8 4.38666 4.8 4.53332Z" fill="#738499"/>
</svg>
`,
        label: "Charts",
        route: "/custom-datatable",
      },
      {
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M14.875 7.625H11.125V13.375H14.875V7.625Z" fill="#E9EFF6"/>
  <path d="M9.875 3.875H6.125V13.375H9.875V3.875Z" fill="#738499"/>
  <path d="M4.875 0.125H1.125V13.375H4.875V0.125Z" fill="#738499"/>
  <path d="M14.875 14.625H1.125V15.875H14.875V14.625Z" fill="#E9EFF6"/>
</svg>
`,
        label: "Sales",
        route: "/sales",
      },
    ],
  },
  {
    name: "PAGES",
    menuItems: [
      {
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <g clip-path="url(#clip0_571_4378)">
    <path d="M8 8C10.0619 8 11.7333 6.32853 11.7333 4.26667C11.7333 2.2048 10.0619 0.533333 8 0.533333C5.93813 0.533333 4.26666 2.2048 4.26666 4.26667C4.26666 6.32853 5.93813 8 8 8Z" fill="#E9EFF6"/>
    <path d="M0.53334 13.2267V13.9733C0.53334 14.7981 1.27622 15.4667 2.1926 15.4667H13.8074C14.7238 15.4667 15.4667 14.7981 15.4667 13.9733V13.2267C15.4667 11.1648 13.6095 9.49334 11.3185 9.49334H4.68149C2.39053 9.49334 0.53334 11.1648 0.53334 13.2267Z" fill="#738499"/>
  </g>
  <defs>
    <clipPath id="clip0_571_4378">
      <rect width="16" height="16" fill="white"/>
    </clipPath>
  </defs>
</svg>
`,
        label: "Account",
        route: "/account",
      },
      {
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <g clip-path="url(#clip0_571_4388)">
    <path d="M7.9995 0.00151062C3.59097 0.00151062 0 3.59248 0 8.00101C0 12.4096 3.59099 16.0005 7.9995 16.0005C12.408 16.0005 15.999 12.4096 15.999 8.00101C15.999 3.59247 12.408 0.00151062 7.9995 0.00151062Z" fill="#E9EFF6"/>
    <path d="M8.00136 11.1141C7.48128 11.1232 7.16301 10.692 7.16163 10.2668V7.71431C7.17463 7.16042 7.58907 6.88066 8.00877 6.86724C8.61653 6.89142 8.86514 7.39362 8.84851 7.7219V10.2596C8.8485 10.8031 8.40643 11.1167 8.00137 11.1143L8.00136 11.1141ZM7.37247 6.43449C7.19983 6.26186 7.11351 6.04719 7.11351 5.7908C7.13074 5.26083 7.53171 4.88084 8.00135 4.88834C8.63225 4.90648 8.87525 5.36665 8.88549 5.79824C8.87642 6.37357 8.44505 6.68719 8.00135 6.6897C7.75225 6.6897 7.54263 6.60474 7.37246 6.43452L7.37247 6.43449Z" fill="#738499"/>
    <path d="M15.5803 10.5266C14.6459 10.9385 13.6943 11.322 12.7305 11.675C9.46658 12.8704 6.10721 13.7005 2.85471 14.1154C4.24706 15.2887 6.04043 15.9996 7.99807 15.9996C11.523 15.9996 14.5185 13.7005 15.5803 10.5266Z" fill="#738499"/>
  </g>
  <defs>
    <clipPath id="clip0_571_4388">
      <rect width="16" height="16" fill="white"/>
    </clipPath>
  </defs>
</svg>
`,
        label: "Faq",
        route: "/faq",
      },
      {
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M9.18 3.185C9.06094 2.97722 8.88911 2.80456 8.68191 2.68448C8.47471 2.5644 8.23948 2.50117 8 2.50117C7.76052 2.50117 7.52529 2.5644 7.31809 2.68448C7.11089 2.80456 6.93906 2.97722 6.82 3.185L5.065 6.25C5.02112 6.32601 4.99801 6.41223 4.99801 6.5C4.99801 6.58777 5.02112 6.67399 5.065 6.75C5.10905 6.8263 5.17248 6.88961 5.24887 6.93351C5.32526 6.97741 5.4119 7.00035 5.5 7H6.25V13C6.25 13.1326 6.30268 13.2598 6.39645 13.3536C6.49021 13.4473 6.61739 13.5 6.75 13.5H9.25C9.38261 13.5 9.50979 13.4473 9.60355 13.3536C9.69732 13.2598 9.75 13.1326 9.75 13V7H10.5C10.5873 6.99947 10.6729 6.97612 10.7483 6.93226C10.8237 6.8884 10.8864 6.82557 10.93 6.75C10.9739 6.67399 10.997 6.58777 10.997 6.5C10.997 6.41223 10.9739 6.32601 10.93 6.25L9.18 3.185ZM4 8.5H2.5C2.23478 8.5 1.98043 8.60536 1.79289 8.79289C1.60536 8.98043 1.5 9.23478 1.5 9.5V13C1.5 13.1326 1.55268 13.2598 1.64645 13.3536C1.74021 13.4473 1.86739 13.5 2 13.5H4.5C4.63261 13.5 4.75979 13.4473 4.85355 13.3536C4.94732 13.2598 5 13.1326 5 13V9.5C5 9.23478 4.89464 8.98043 4.70711 8.79289C4.51957 8.60536 4.26522 8.5 4 8.5ZM13.5 8.5H12C11.7348 8.5 11.4804 8.60536 11.2929 8.79289C11.1054 8.98043 11 9.23478 11 9.5V13C11 13.1326 11.0527 13.2598 11.1464 13.3536C11.2402 13.4473 11.3674 13.5 11.5 13.5H14C14.1326 13.5 14.2598 13.4473 14.3536 13.3536C14.4473 13.2598 14.5 13.1326 14.5 13V9.5C14.5 9.23478 14.3946 8.98043 14.2071 8.79289C14.0196 8.60536 13.7652 8.5 13.5 8.5Z" fill="#738499"/>
  <path d="M15 13.5H1C0.867392 13.5 0.740215 13.4473 0.646447 13.3536C0.552678 13.2598 0.5 13.1326 0.5 13C0.5 12.8674 0.552678 12.7402 0.646447 12.6464C0.740215 12.5527 0.867392 12.5 1 12.5H15C15.1326 12.5 15.2598 12.5527 15.3536 12.6464C15.4473 12.7402 15.5 12.8674 15.5 13C15.5 13.1326 15.4473 13.2598 15.3536 13.3536C15.2598 13.4473 15.1326 13.5 15 13.5Z" fill="#E9EFF6"/>
</svg>
`,
        label: "List",
        route: "/list",
      },
      {
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <g clip-path="url(#clip0_571_4422)">
    <path d="M8 8C10.0619 8 11.7333 6.32853 11.7333 4.26667C11.7333 2.2048 10.0619 0.533333 8 0.533333C5.93813 0.533333 4.26666 2.2048 4.26666 4.26667C4.26666 6.32853 5.93813 8 8 8Z" fill="#E9EFF6"/>
    <path d="M0.53334 13.2267V13.9733C0.53334 14.7981 1.27622 15.4667 2.1926 15.4667H13.8074C14.7238 15.4667 15.4667 14.7981 15.4667 13.9733V13.2267C15.4667 11.1648 13.6095 9.49334 11.3185 9.49334H4.68149C2.39053 9.49334 0.53334 11.1648 0.53334 13.2267Z" fill="#738499"/>
  </g>
  <defs>
    <clipPath id="clip0_571_4422">
      <rect width="16" height="16" fill="white"/>
    </clipPath>
  </defs>
</svg>
`,
        label: "Profile",
        route: "/profile",
      },
      {
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <g clip-path="url(#clip0_571_4432)">
    <path d="M8.28 13.9593L2.04878 7.72806L1.13696 8.63249L0.52471 9.23989C0.33521 9.40426 0.0910187 9.71537 0.505863 10.1302L5.33512 14.9595L5.70594 15.3303C5.95562 15.5686 6.27165 15.9676 6.8522 15.3871L7.37187 14.8674L8.28 13.9593Z" fill="#E9EFF6"/>
    <path d="M6.11762 3.69042L2.04878 7.72806L8.28 13.9593L12.6158 9.62347C12.8842 9.34365 13.072 8.9695 13.0369 8.3469L12.7821 3.82645C12.7527 3.33838 12.5911 3.21753 12.1873 3.21753H7.58917C6.91782 3.22509 6.48624 3.36792 6.11762 3.69042Z" fill="#738499"/>
    <path d="M12.5793 0.268755C12.233 0.27594 11.884 0.342385 11.5461 0.4715C10.3844 0.915412 9.62151 2.01049 9.56934 3.21752H10.7995C10.8473 2.51032 11.296 1.88121 11.9827 1.6188C12.8004 1.30636 13.7162 1.6034 14.1939 2.33685C14.6717 3.0703 14.5747 4.02834 13.9584 4.64993C13.3421 5.27152 12.385 5.37692 11.6475 4.90548C11.5102 4.82109 11.3453 4.79395 11.1883 4.82992C11.0312 4.86588 10.8946 4.96206 10.8077 5.09777C10.7209 5.23347 10.6908 5.39785 10.7239 5.55553C10.757 5.7132 10.8507 5.85157 10.9849 5.94084C12.2039 6.72014 13.8119 6.5433 14.8307 5.51582C15.8494 4.48834 16.0132 2.8787 15.2235 1.66632C14.8286 1.06013 14.2473 0.631166 13.5952 0.41923C13.2691 0.313262 12.9257 0.261571 12.5793 0.268755Z" fill="#E9EFF6"/>
  </g>
  <defs>
    <clipPath id="clip0_571_4432">
      <rect width="16" height="16" fill="white"/>
    </clipPath>
  </defs>
</svg>
`,
        label: "Pricing",
        route: "/pricing",
      },
      {
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <g clip-path="url(#clip0_571_4442)">
    <path d="M14.161 0.041673C14.1088 0.0128532 14.0498 -0.001422 13.9901 0.000336952C13.9305 0.0020959 13.8724 0.0198245 13.822 0.051673L11.8887 1.27267L9.95267 0.051673C9.89939 0.0180264 9.83768 0.000167847 9.77467 0.000167847C9.71166 0.000167847 9.64994 0.0180264 9.59667 0.051673L7.66333 1.27234L5.73333 0.051673C5.68006 0.0180264 5.61834 0.000167847 5.55533 0.000167847C5.49232 0.000167847 5.43061 0.0180264 5.37733 0.051673L3.444 1.27234L1.51167 0.051673C1.46109 0.0206438 1.40319 0.00356279 1.34387 0.00216694C1.28455 0.0007711 1.22591 0.0151102 1.17393 0.0437262C1.12195 0.0723421 1.07847 0.114214 1.04792 0.165084C1.01737 0.215954 1.00084 0.274007 1 0.33334V14.3333C1.00069 14.5537 1.04493 14.7717 1.13017 14.9749C1.2154 15.1781 1.33995 15.3624 1.49666 15.5173C1.65337 15.6721 1.83915 15.7945 2.04332 15.8774C2.24748 15.9602 2.46601 16.0019 2.68633 16L14.0197 15.3333C14.1046 15.3283 14.1844 15.291 14.2428 15.229C14.3011 15.167 14.3335 15.0851 14.3333 15V0.33334C14.3333 0.273759 14.3173 0.215277 14.287 0.163981C14.2567 0.112685 14.2132 0.0704505 14.161 0.041673Z" fill="#E9EFF6"/>
    <path d="M10 8.66667C11.6569 8.66667 13 7.32353 13 5.66667C13 4.00982 11.6569 2.66667 10 2.66667C8.34315 2.66667 7 4.00982 7 5.66667C7 7.32353 8.34315 8.66667 10 8.66667Z" fill="#738499"/>
    <path d="M11.3333 6C11.2449 6 11.1601 5.96488 11.0976 5.90237C11.0351 5.83986 11 5.75507 11 5.66667C11 5.40145 10.8946 5.1471 10.7071 4.95956C10.5196 4.77202 10.2652 4.66667 10 4.66667C9.91159 4.66667 9.8268 4.63155 9.76429 4.56904C9.70178 4.50652 9.66666 4.42174 9.66666 4.33333C9.66666 4.24493 9.70178 4.16014 9.76429 4.09763C9.8268 4.03512 9.91159 4 10 4C10.4419 4.00053 10.8655 4.17629 11.1779 4.48874C11.4904 4.80119 11.6661 5.2248 11.6667 5.66667C11.6667 5.75507 11.6315 5.83986 11.569 5.90237C11.5065 5.96488 11.4217 6 11.3333 6ZM10 7.33333C9.55813 7.3328 9.13451 7.15704 8.82207 6.84459C8.50962 6.53215 8.33386 6.10853 8.33333 5.66667C8.33333 5.57826 8.36845 5.49348 8.43096 5.43096C8.49347 5.36845 8.57826 5.33333 8.66666 5.33333C8.75507 5.33333 8.83985 5.36845 8.90236 5.43096C8.96488 5.49348 9 5.57826 9 5.66667C9 5.93188 9.10535 6.18624 9.29289 6.37377C9.48042 6.56131 9.73478 6.66667 10 6.66667C10.0884 6.66667 10.1732 6.70179 10.2357 6.7643C10.2982 6.82681 10.3333 6.91159 10.3333 7C10.3333 7.08841 10.2982 7.17319 10.2357 7.2357C10.1732 7.29821 10.0884 7.33333 10 7.33333Z" fill="#E9EFF6"/>
    <path d="M6.66666 3.66667H2.66666C2.57826 3.66667 2.49347 3.63155 2.43096 3.56904C2.36845 3.50652 2.33333 3.42174 2.33333 3.33333C2.33333 3.24493 2.36845 3.16014 2.43096 3.09763C2.49347 3.03512 2.57826 3 2.66666 3H6.66666C6.75507 3 6.83985 3.03512 6.90236 3.09763C6.96488 3.16014 7 3.24493 7 3.33333C7 3.42174 6.96488 3.50652 6.90236 3.56904C6.83985 3.63155 6.75507 3.66667 6.66666 3.66667ZM5.99999 6H2.66666C2.57826 6 2.49347 5.96488 2.43096 5.90237C2.36845 5.83986 2.33333 5.75507 2.33333 5.66667C2.33333 5.57826 2.36845 5.49348 2.43096 5.43096C2.49347 5.36845 2.57826 5.33333 2.66666 5.33333H5.99999C6.0884 5.33333 6.17319 5.36845 6.2357 5.43096C6.29821 5.49348 6.33333 5.57826 6.33333 5.66667C6.33333 5.75507 6.29821 5.83986 6.2357 5.90237C6.17319 5.96488 6.0884 6 5.99999 6ZM6.66666 8.33333H2.66666C2.57826 8.33333 2.49347 8.29821 2.43096 8.2357C2.36845 8.17319 2.33333 8.08841 2.33333 8C2.33333 7.91159 2.36845 7.82681 2.43096 7.7643C2.49347 7.70179 2.57826 7.66667 2.66666 7.66667H6.66666C6.75507 7.66667 6.83985 7.70179 6.90236 7.7643C6.96488 7.82681 7 7.91159 7 8C7 8.08841 6.96488 8.17319 6.90236 8.2357C6.83985 8.29821 6.75507 8.33333 6.66666 8.33333ZM12.6667 10.6667H2.66666C2.57826 10.6667 2.49347 10.6315 2.43096 10.569C2.36845 10.5065 2.33333 10.4217 2.33333 10.3333C2.33333 10.2449 2.36845 10.1601 2.43096 10.0976C2.49347 10.0351 2.57826 10 2.66666 10H12.6667C12.7551 10 12.8399 10.0351 12.9024 10.0976C12.9649 10.1601 13 10.2449 13 10.3333C13 10.4217 12.9649 10.5065 12.9024 10.569C12.8399 10.6315 12.7551 10.6667 12.6667 10.6667ZM14.6667 12.6667H4.66666C4.57826 12.6667 4.49347 12.7018 4.43096 12.7643C4.36845 12.8268 4.33333 12.9116 4.33333 13V14.3333C4.33341 14.7176 4.20073 15.09 3.95776 15.3876C3.71479 15.6853 3.37645 15.8898 2.99999 15.9667V16H13.3333C13.5522 16 13.7689 15.9569 13.9711 15.8731C14.1733 15.7894 14.3571 15.6666 14.5118 15.5118C14.6666 15.3571 14.7894 15.1733 14.8731 14.9711C14.9569 14.7689 15 14.5522 15 14.3333V13C15 12.9116 14.9649 12.8268 14.9024 12.7643C14.8399 12.7018 14.7551 12.6667 14.6667 12.6667Z" fill="#738499"/>
  </g>
  <defs>
    <clipPath id="clip0_571_4442">
      <rect width="16" height="16" fill="white"/>
    </clipPath>
  </defs>
</svg>
`,
        label: "Invoice",
        route: "/invoice",
      },
      {
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <g clip-path="url(#clip0_571_4453)">
    <path d="M1.30576 7.48718V8.2596L1.98033 14.5496C2.00699 14.8021 2.1262 15.0357 2.31496 15.2054C2.50371 15.3752 2.74864 15.469 3.00249 15.4688H12.9975C13.2514 15.469 13.4963 15.3752 13.6851 15.2054C13.8738 15.0357 13.993 14.8021 14.0197 14.5496L14.6943 8.2596V7.48718H1.30576Z" fill="#738499"/>
    <path d="M11.3471 9.80441H10.8322C10.5478 9.80441 10.3172 10.035 10.3172 10.3194V13.409C10.3172 13.6934 10.5478 13.924 10.8322 13.924H11.3471C11.6315 13.924 11.8621 13.6934 11.8621 13.409V10.3194C11.8621 10.035 11.6315 9.80441 11.3471 9.80441Z" fill="#E9EFF6"/>
    <path d="M8.25748 9.80441H7.74254C7.45815 9.80441 7.2276 10.035 7.2276 10.3194V13.409C7.2276 13.6934 7.45815 13.924 7.74254 13.924H8.25748C8.54188 13.924 8.77243 13.6934 8.77243 13.409V10.3194C8.77243 10.035 8.54188 9.80441 8.25748 9.80441Z" fill="#E9EFF6"/>
    <path d="M5.16782 9.80441H4.65288C4.36849 9.80441 4.13794 10.035 4.13794 10.3194V13.409C4.13794 13.6934 4.36849 13.924 4.65288 13.924H5.16782C5.45222 13.924 5.68277 13.6934 5.68277 13.409V10.3194C5.68277 10.035 5.45222 9.80441 5.16782 9.80441Z" fill="#E9EFF6"/>
    <path d="M14.9517 6.19981H1.04828C0.763888 6.19981 0.53334 6.43036 0.53334 6.71476V7.74464C0.53334 8.02904 0.763888 8.25958 1.04828 8.25958H14.9517C15.2361 8.25958 15.4667 8.02904 15.4667 7.74464V6.71476C15.4667 6.43036 15.2361 6.19981 14.9517 6.19981Z" fill="#E9EFF6"/>
    <path d="M3.41058 6.42125L5.76 0.906213C5.79591 0.828784 5.84686 0.75927 5.90988 0.701716C5.9729 0.644161 6.04674 0.599714 6.12711 0.570963C6.20747 0.542211 6.29274 0.529728 6.37797 0.534241C6.4632 0.538753 6.54668 0.560171 6.62356 0.597247C6.76167 0.657339 6.87069 0.769229 6.92716 0.908858C6.98364 1.04849 6.98307 1.2047 6.92557 1.34391L4.57563 6.85895C4.53973 6.93638 4.48878 7.00589 4.42575 7.06345C4.36273 7.121 4.28889 7.16545 4.20853 7.1942C4.12817 7.22295 4.04289 7.23543 3.95766 7.23092C3.87243 7.22641 3.78895 7.20499 3.71208 7.16791C3.57406 7.10773 3.46516 6.9958 3.40878 6.85618C3.3524 6.71656 3.35305 6.5604 3.41058 6.42125ZM12.5894 6.42125L10.24 0.906213C10.2041 0.828784 10.1531 0.75927 10.0901 0.701716C10.0271 0.644161 9.95326 0.599714 9.8729 0.570963C9.79254 0.542211 9.70726 0.529728 9.62203 0.534241C9.5368 0.538753 9.45332 0.560171 9.37644 0.597247C9.23833 0.657339 9.12932 0.769229 9.07284 0.908858C9.01636 1.04849 9.01693 1.2047 9.07443 1.34391L11.4244 6.85895C11.4603 6.93638 11.5112 7.00589 11.5743 7.06345C11.6373 7.121 11.7111 7.16545 11.7915 7.1942C11.8718 7.22295 11.9571 7.23543 12.0423 7.23092C12.1276 7.22641 12.2111 7.20499 12.2879 7.16791C12.4259 7.10773 12.5348 6.9958 12.5912 6.85618C12.6476 6.71656 12.647 6.5604 12.5894 6.42125Z" fill="#738499"/>
  </g>
  <defs>
    <clipPath id="clip0_571_4453">
      <rect width="16" height="16" fill="white"/>
    </clipPath>
  </defs>
</svg>
`,
        label: "Ecommerce",
        route: "/ecommerce",
      },
    ],
  },
];