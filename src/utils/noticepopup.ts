import Swal from "sweetalert2";

export const showNoticePublishedPopup = ({
  title,
}: {
  title: string;
  resetForm: () => void;
}) => {
  Swal.fire({
    icon: "success",
    iconHtml:
      '<svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-white" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414l4 4a1 1 0 011.414 0l8-8a1 1 0 011.414 0z" clipRule="evenodd" /></svg>',
    iconColor: "#10B981",
    title:
      '<span class="text-gray-800 font-bold text-xl">Notice Published Successfully</span>',
    html: `
          <div class="mt-4 text-sm text-gray-600">
            Your notice <strong>"${
              title || "Untitled Notice"
            }"</strong> has been published<br>
            and is now visible to all selected departments.
          </div>
        `,
    showConfirmButton: false,
    showCloseButton: true,
    customClass: {
      popup: "rounded-xl shadow-lg p-6 max-w-md mx-auto",
      title: "text-center mb-2",
      htmlContainer: "text-center mb-6",
      actions: "flex justify-center gap-3 mt-4",
    },
    buttonsStyling: false,
    didOpen: () => {
      const swal = Swal.getPopup();

      const btnContainer = document.createElement("div");
      btnContainer.className = "flex justify-center gap-3 mt-4";

      const viewBtn = document.createElement("button");
      viewBtn.innerHTML = "View Notice";
      viewBtn.className =
        "px-4 py-2 border border-blue-300 text-blue-600 rounded-full hover:bg-blue-50 transition";
      viewBtn.onclick = () => {
        Swal.close();
        window.location.href = "/notice-board";
      };

      const createBtn = document.createElement("button");
      createBtn.innerHTML = "+ Create Another";
      createBtn.className =
        "px-4 py-2 border border-orange-300 text-orange-600 rounded-full hover:bg-orange-50 transition";
      createBtn.onclick = () => {
        Swal.close();
      };

      const closeBtn = document.createElement("button");
      closeBtn.innerHTML = "Close";
      closeBtn.className =
        "px-4 py-2 border border-gray-300 text-gray-600 rounded-full hover:bg-gray-50 transition";
      closeBtn.onclick = () => {
        Swal.close();
      };

      btnContainer.appendChild(viewBtn);
      btnContainer.appendChild(createBtn);
      btnContainer.appendChild(closeBtn);

      swal?.appendChild(btnContainer);
    },
  });
};
