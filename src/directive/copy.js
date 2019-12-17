import Util from "@/assets/js/util";
import { Message } from "element-ui";

const handleCopy = (el, binding, vnode) => {
    const { value, modifiers } = binding;
    const copyNode = el.querySelector(".vk-val-copy") || el;
    const copyGroup = copyNode.querySelector(".vk-val-copy-group");
    if (copyGroup) copyNode.removeChild(copyGroup);
    let hasCopy = false;
    if (!copyNode || !value) return;
    const selectNode = document.createElement("span");
    const selectInput = document.createElement("input");
    selectNode.className = "vk-copy-group vk-val-copy-group";
    selectNode.innerHTML = "<i class='vk-icon vk-icon-val-copy' title='复制'></i>";
    selectInput.setAttribute("type", "text");
    selectInput.style.width = "1px";
    const listener = Util.listener(selectNode, "click", (e) => {
        if (!modifiers.bubble) { e.stopPropagation(); }
        if (hasCopy) return;
        selectInput.setAttribute("value", value);
        selectNode.getElementsByTagName("input")[0].select();
        document.execCommand("Copy");
        Message({
            message: "复制成功",
            type: "success"
        });
        hasCopy = true;
        setTimeout(() => {
            hasCopy = false;
        }, 2000);
    });
    selectNode.appendChild(selectInput);
    copyNode.appendChild(selectNode);
};

export default handleCopy;
