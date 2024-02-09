<script setup>
import Button from "./components/button/Button.vue";
</script>

<!-- TEMPLATE -->
<template>
  <div class="container mx-auto py-10 flex gap-6 flex-wrap items-center">
    <Button title="Primary" color="primary" />
    <Button title="Secondary" color="secondary" />
    <Button title="Info" color="info" />
    <Button title="Success" color="success" />
    <Button title="Warning" color="warning" />
    <Button title="Error" color="error" />

    <Button title="Primary" size="small" color="primary" />
    <Button title="Secondary" size="small" color="secondary" />
    <Button title="Info" size="small" color="info" />
    <Button title="Success" size="small" color="success" />
    <Button title="Warning" size="small" color="warning" />
    <Button title="Error" size="small" color="error" />

    <Button title="Primary" color="primary" shape="pill" />
    <Button title="Secondary" color="secondary" shape="pill" />
    <Button title="Info" color="info" shape="pill" />
    <Button title="Success" color="success" shape="pill" />
    <Button title="Warning" color="warning" shape="pill" />
    <Button title="Error" color="error" shape="pill" />

    <!-- Outline -->
    <Button title="Primary" variant="outline" color="primary" />
    <Button title="Secondary" variant="outline" color="secondary" />
    <Button title="Info" variant="outline" color="info" />
    <Button title="Success" variant="outline" shape="pill" color="success" />
    <Button title="Warning" variant="outline" size="medium" color="warning" />
    <Button title="Error" variant="outline" size="small" color="error" />
  </div>
</template>

<!-- STYLE -->
<style scoped></style>
