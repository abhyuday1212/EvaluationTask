import zod from "zod"

const updateRemark = zod.object({
    remark: zod.string()
})

export { updateRemark }