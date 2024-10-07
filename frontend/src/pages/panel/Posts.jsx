import Sidebar from "../../components/site/sidebar/sidebar";
import Container from "../../components/panel/container/container";
import Navbar from "../../components/panel/navbar/navbar";
import React from "react";

function PostsPage() {
  return (
    <div className="bg-[#f9fafb] h-[100vh]">
      <Navbar />
      <div className="md:max-w-[80%] h-[90vh] m-auto flex overflow-hidden">
        <Sidebar />
        <Container />
      </div>
    </div>
  )
}

export default PostsPage
