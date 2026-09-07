import Editor from "../components/Editor";
import Sidebar from "../components/Sidebar";
import AIPanel from "../components/AIPanel";
const NotesPage = () => {
  return (
    <div className="grid h-screen grid-cols-3">
      <Sidebar></Sidebar>
      <Editor></Editor>
      <AIPanel></AIPanel>
    </div>
  );
};

export default NotesPage;
