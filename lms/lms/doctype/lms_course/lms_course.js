// Copyright (c) 2021, FOSS United and contributors
// For license information, please see license.txt

frappe.ui.form.on("LMS Course", {
	onload: function (frm) {
		frm.set_query("chapter", "chapters", function () {
			return {
				filters: {
					course: frm.doc.name,
				},
			};
		});

		frm.set_query("instructor", "instructors", function () {
			return {
				filters: {
					ignore_user_type: 1,
				},
			};
		});

		frm.set_query("course", "related_courses", function () {
			return {
				filters: {
					published: true,
				},
			};
		});
	},
	refresh: (frm) => {
		frm.add_web_link(`/courses/${frm.doc.name}`, "See on Website");

		frm.set_query("print_format", function () {
			return {
				filters: {
					doc_type: "LMS Certificate",
				},
			};
		});
	},
});
