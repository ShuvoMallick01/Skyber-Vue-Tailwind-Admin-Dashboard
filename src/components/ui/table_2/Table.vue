<script setup lang="ts">
import { TableHead, TableRow } from "../../../components/ui/table_2";
</script>

<!-- === TEMPLATE === -->
<template>
  <table
    class="table-auto w-full text-left rtl:text-right text-main dark:text-dark-text200"
  >
    <thead class="border-b font-13m border-b-muted/20">
      <tr class="">
        <slot name="tableHead"></slot>
      </tr>
    </thead>

    <tbody>
      <slot name="tableRow"></slot>
    </tbody>
  </table>
</template>
