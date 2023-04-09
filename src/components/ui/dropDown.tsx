import React, { Component, useEffect } from 'react';
import $ from "jquery";

function DropDown(props: any) {
    let listItem = props.lists.map((list: any) =>
        <li><a>{list}</a></li>
    )
    useEffect(() => {
        var dropdowns = $(".dropdown");

        // Onclick on a dropdown, toggle visibility
        dropdowns.find("dt").click(function () {
            dropdowns.find("dd ul").hide();
            $(this).next().children().toggle();
        });

        // Clic handler for dropdown
        dropdowns.find("dd ul li a").click(function () {
            var leSpan = $(this).parents(".dropdown").find("dt a span");

            // Remove selected class
            $(this).parents(".dropdown").find('dd a').each(function () {
                $(this).removeClass('selected');
            });

            // Update selected value
            leSpan.html($(this).html());

            // If back to default, remove selected class else addclass on right element
            if ($(this).hasClass('default')) {
                leSpan.removeClass('selected')
            }
            else {
                leSpan.addClass('selected');
                $(this).addClass('selected');
            }

            // Close dropdown
            $(this).parents("ul").hide();
        });

        // Close all dropdown onclick on another element
        $(document).bind('click', function (e) {
            if (!$(e.target).parents().hasClass("dropdown")) $(".dropdown dd ul").hide();
        });
    }, [])

    return (
        <div className="">
            <dl className="dropdown">
                <dt><a><span>{props.title}</span></a></dt>
                <dd>
                    <ul>
                        {listItem}
                    </ul>
                </dd>
            </dl>
        </div>
    );
}

export default DropDown;
