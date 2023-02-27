import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Heading from '../../atoms/Heading'
import Button from '../../atoms/Button'
import Avatar from '../../atoms/Avatar'
import Text from '../../atoms/Text'
import Image from 'next/image'
import AddMediaPopup from '../comment/AddMediaPopup'
import UploadImagePreview from '../UploadImagePreview'

const EditPost = ({
    profileImg,
    lists,
    isUploaded = true,
    content,
    uploadImgSrc = "",
    uploadImgWidth = "80",
    uploadImgHeight = "80",
    uploadImgAlt = "",
    inputLength,
    inputMaxLength,
    btnClick = () => { },
}) => {
    const [mediaPopup, setMediaPopup] = useState(false);
    return (
        <>
            <div className='bg-white w-full flex justify-between px-6 py-4 fixed top-0 left-0 z-10 overflow-hidden'>
                <Heading type='h6' className="font-semibold" children="Edit Post" />
                <Button label='Cancel' style='' size='' fontSize="text-sm" fontColor="text-neutral-400" fontWeight="font-normal" />
            </div>

            <div className='bg-gray-100 px-5 h-screen pt-[80px] pb-[92px] overflow-y-auto'>
                <div className='flex h-full'>
                    <div className='flex-shrink-0 mr-2'>
                        <Avatar imgSrc={profileImg} />
                    </div>

                    <div className='w-full ml-6 relative'>
                        <div dangerouslySetInnerHTML={{ __html: content }}></div>

                        {isUploaded &&
                            <UploadImagePreview
                                imgSrc={uploadImgSrc}
                                imgWidth={uploadImgWidth}
                                imgHeight={uploadImgHeight}
                                imgAlt={uploadImgAlt}
                            />
                        }

                        <div className='text-right absolute right-0 bottom-0'>
                            {inputLength && (
                                <Text variant='caption' textColor='text-neutral-400'>
                                    {inputLength}/{inputMaxLength}
                                </Text>
                            )}
                        </div>

                    </div>
                </div>
            </div>

            <div className='bg-white w-full flex items-center justify-between px-6 py-3.5 fixed bottom-0 right-0 z-10'>
                <div onClick={() => setMediaPopup(true)} className="flex-shrink-0 mb-2 cursor-pointer">
                    <Image src="/images/icons/add.svg" width="24" height="24" alt="add" />
                </div>
                <Button size='small' label='Save' btnRadius="rounded-full" onClick={btnClick} />
            </div>

            <AddMediaPopup
                lists={lists}
                cardWidth="w-full"
                modalAlignment="items-end"
                showModal={mediaPopup}
                closeModalPopup={() => setMediaPopup(false)}
            />
        </>
    )
}

EditPost.propTypes = {
    profileImg: PropTypes.string,
    lists: PropTypes.array,
    content: PropTypes.node,
    time: PropTypes.string,
    uploadImgSrc: PropTypes.string,
    uploadImgWidth: PropTypes.number,
    uploadImgHeight: PropTypes.number,
    uploadImgAlt: PropTypes.string,
    inputLength: PropTypes.number,
    inputMaxLength: PropTypes.number,
    isUploaded: PropTypes.bool,
    btnClick: PropTypes.func,
}

export default EditPost