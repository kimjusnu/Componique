"use strict";
"use client";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const image_1 = __importDefault(require("next/image"));
const react_1 = require("react");
const SelectValueAdd = ({ option, onChange, placeholder = "Option 1", className, }) => {
    const [selectValue, setSelectValue] = (0, react_1.useState)([]);
    const [open, setOpen] = (0, react_1.useState)(false);
    const dropMenuRef = (0, react_1.useRef)(null);
    const handleDropDown = () => {
        setOpen(!open);
    };
    const handleOptionClick = (item) => {
        let updatedValue;
        if (selectValue.includes(item)) {
            updatedValue = selectValue.filter((value) => value !== item);
        }
        else {
            updatedValue = [...selectValue, item];
        }
        setSelectValue(updatedValue);
        if (onChange) {
            onChange(updatedValue);
        }
    };
    const handleOptionRemove = (item) => {
        const updatedValue = selectValue.filter((value) => value !== item);
        setSelectValue(updatedValue);
        if (onChange) {
            onChange(updatedValue);
        }
    };
    (0, react_1.useEffect)(() => {
        const handleOutsideClose = (e) => {
            if (open &&
                dropMenuRef.current &&
                !dropMenuRef.current.contains(e.target)) {
                setOpen(false);
            }
        };
        document.addEventListener("click", handleOutsideClose);
        return () => document.removeEventListener("click", handleOutsideClose);
    }, [open]);
    return (<div className={`relative ${className}`} ref={dropMenuRef}>
      <div className={`flex h-9 min-w-60 max-w-[450px] cursor-pointer items-center justify-between rounded-lg border border-gray p-2 shadow-lg dark:border-[#2A6490] dark:bg-[#2a2e39] ${className}`} onClick={handleDropDown} style={{ width: open ? "auto" : "fit-content" }}>
        <div className="flex flex-wrap gap-1">
          {selectValue.length > 0 ? (selectValue.map((item, key) => (<div key={key} className="mr-1.5 flex items-center rounded-md bg-gray p-[2px] px-1.5 text-sm dark:bg-[#2A6490] dark:text-white">
                {item}
                <span className="cursor-pointer pl-2" onClick={(e) => {
                e.stopPropagation();
                handleOptionRemove(item);
            }}>
                  X
                </span>
              </div>))) : (<span className="rounded-md bg-gray p-[2px] px-1.5 text-sm dark:bg-[#2A6490] dark:text-white">
              {placeholder}
            </span>)}
        </div>
        {open ? (<image_1.default src="/selectdown.svg" alt="arrow" width={15} height={15}/>) : (<image_1.default src="/selectup.svg" alt="arrow" width={15} height={15}/>)}
        {open && (<ul className="absolute left-0 right-0 top-full z-30 min-w-60 max-w-[450px] rounded-lg border border-gray bg-white text-xs shadow-lg dark:border-[#2A6490] dark:bg-[#2a2e39]">
            {option.map((item, key) => (<li className={`block w-full cursor-pointer rounded-lg py-2 pl-4 text-sm hover:bg-[#E8F5FF] dark:text-[#ffffff] dark:hover:bg-[#2A6490] dark:hover:text-white ${selectValue.includes(item)
                    ? "bg-[#E8F5FF] dark:bg-[#2a6490] dark:text-white"
                    : ""}`} key={key} onClick={() => handleOptionClick(item)}>
                {item}
              </li>))}
          </ul>)}
      </div>
    </div>);
};
exports.default = SelectValueAdd;
