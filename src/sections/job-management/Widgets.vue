<script setup lang="ts">
import { Widget2 } from "@/components/Widget";
import Badge from "@/components/ui/badge/Badge.vue";
</script>

<!-- === TEMPLATE === -->
<template>
  <!-- Total Applications -->
  <Widget2
    class="col-span-3 lg:col-span-1"
    title="Total Applications"
    number="5672"
  >
    <template v-slot:increment>
      <div class="flex items-center gap-1">
        <Badge
          variant="translucent"
          shape="circle"
          color="primary"
          class="w-[19px] h-[19px] fill-primary"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill=""
            class="absolute"
          >
            <path
              d="M9.16666 2.29165V4.37498C9.16666 4.49004 9.07338 4.58331 8.95832 4.58331H8.83749C8.781 4.58413 8.72669 4.5615 8.68749 4.52081L8.00416 3.83748L5.77082 6.06665C5.73302 6.10693 5.68023 6.12978 5.62499 6.12978C5.56975 6.12978 5.51696 6.10693 5.47916 6.06665L4.37499 4.96248L1.48332 7.85415C1.4442 7.89359 1.39096 7.91577 1.33541 7.91577C1.27986 7.91577 1.22661 7.89359 1.18749 7.85415L0.895823 7.56248C0.856383 7.52336 0.834198 7.47011 0.834198 7.41456C0.834198 7.35901 0.856383 7.30576 0.895823 7.26665L4.22916 3.93331C4.26696 3.89303 4.31975 3.87018 4.37499 3.87018C4.43023 3.87018 4.48302 3.89303 4.52082 3.93331L5.62499 5.03748L7.41249 3.24581L6.72916 2.56248C6.68847 2.52328 6.66584 2.46897 6.66666 2.41248V2.29165C6.66666 2.17659 6.75993 2.08331 6.87499 2.08331H8.95832C9.07338 2.08331 9.16666 2.17659 9.16666 2.29165Z"
              fill=""
            />
          </svg>
        </Badge>
        <p class="font-12sb text-primary">+14% Inc</p>
      </div>
    </template>

    <template v-slot:progressBar>
      <div class="relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="83"
          height="83"
          viewBox="0 0 83 83"
          fill="none"
          class=""
        >
          <ellipse
            cx="41.5793"
            cy="41.5"
            rx="36.5793"
            ry="36.5"
            stroke="#E5F3FD"
            stroke-width="9"
            stroke-linecap="round"
          />
          <path
            d="M5 41.5C5 61.6584 21.3771 78 41.5793 78C61.7815 78 78.1586 61.6584 78.1586 41.5C78.1586 21.3416 61.7815 5 41.5793 5"
            stroke="#2499EF"
            stroke-width="9"
            stroke-linecap="round"
          />
        </svg>
        <p
          class="absolute flex inset-0 items-center justify-center dark:text-dark-text200"
        >
          70%
        </p>
      </div>
    </template>
  </Widget2>

  <!-- Shortlisted Canditates -->
  <Widget2
    class="col-span-3 lg:col-span-1"
    title=" Shortlisted Canditates"
    number="4582"
  >
    <template v-slot:increment>
      <div class="flex items-center gap-1">
        <Badge
          variant="translucent"
          shape="circle"
          color="primary"
          class="w-[19px] h-[19px] fill-primary"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill=""
            class="absolute"
          >
            <path
              d="M9.16666 2.29165V4.37498C9.16666 4.49004 9.07338 4.58331 8.95832 4.58331H8.83749C8.781 4.58413 8.72669 4.5615 8.68749 4.52081L8.00416 3.83748L5.77082 6.06665C5.73302 6.10693 5.68023 6.12978 5.62499 6.12978C5.56975 6.12978 5.51696 6.10693 5.47916 6.06665L4.37499 4.96248L1.48332 7.85415C1.4442 7.89359 1.39096 7.91577 1.33541 7.91577C1.27986 7.91577 1.22661 7.89359 1.18749 7.85415L0.895823 7.56248C0.856383 7.52336 0.834198 7.47011 0.834198 7.41456C0.834198 7.35901 0.856383 7.30576 0.895823 7.26665L4.22916 3.93331C4.26696 3.89303 4.31975 3.87018 4.37499 3.87018C4.43023 3.87018 4.48302 3.89303 4.52082 3.93331L5.62499 5.03748L7.41249 3.24581L6.72916 2.56248C6.68847 2.52328 6.66584 2.46897 6.66666 2.41248V2.29165C6.66666 2.17659 6.75993 2.08331 6.87499 2.08331H8.95832C9.07338 2.08331 9.16666 2.17659 9.16666 2.29165Z"
              fill=""
            />
          </svg>
        </Badge>
        <p class="font-12sb text-primary">+06% Inc</p>
      </div>
    </template>

    <template v-slot:progressBar>
      <div class="relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="83"
          height="83"
          viewBox="0 0 83 83"
          fill="none"
          class=""
        >
          <ellipse
            cx="41.5793"
            cy="41.5"
            rx="36.5793"
            ry="36.5"
            stroke="#E5F3FD"
            stroke-width="9"
            stroke-linecap="round"
          />
          <path
            d="M5 41.5C5 61.6584 21.3771 78 41.5793 78C61.7815 78 78.1586 61.6584 78.1586 41.5C78.1586 21.3416 61.7815 5 41.5793 5"
            stroke="#2499EF"
            stroke-width="9"
            stroke-linecap="round"
          />
        </svg>
        <p
          class="absolute flex inset-0 items-center justify-center dark:text-dark-text200"
        >
          70%
        </p>
      </div>
    </template>
  </Widget2>
</template>
