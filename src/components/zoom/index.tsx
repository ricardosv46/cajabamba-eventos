import { animate, motion, useMotionValue } from 'framer-motion'
import { ReactNode, useRef, useState } from 'react'
import { useGesture } from 'react-use-gesture'
import IconSearchMinus from '../../../public/icons/IconSearchMinus'
import IconSearchPlus from '../../../public/icons/IconSearchPlus'

interface Props {
	children: JSX.Element | JSX.Element[]
	crop: any
	onCropChange: any
	id: string
}

interface ZProps {
	children: JSX.Element | JSX.Element[]
	id: string
}

export default function Zoom({ children, id }: ZProps) {
	let [crop, setCrop] = useState({ x: 0, y: 0, scale: 1 })

	return (
		<>
			<div className=''>
				<ImageCropper crop={crop} onCropChange={setCrop} id={id}>
					{children}
				</ImageCropper>

				{/* <div className='mt-6'>
					<button onClick={() => {}}>pinch</button>
					<p>Crop X: {Math.round(crop.x)}</p>
					<p>Crop Y: {Math.round(crop.y)}</p>
					<p>Crop Scale: {Math.round(crop.scale * 100) / 100}</p>
				</div> */}
			</div>
		</>
	)
}

function ImageCropper({ crop, onCropChange, children, id }: Props) {
	let x = useMotionValue(crop.x)
	let y = useMotionValue(crop.y)
	let scale = useMotionValue(crop.scale)
	let [isDragging, setIsDragging] = useState(false)
	let [isPinching, setIsPinching] = useState(false)

	let imageRef = useRef<any>()
	let imageContainerRef = useRef<any>()
	useGesture(
		{
			onDrag: ({ dragging, movement: [dx, dy] }) => {
				setIsDragging(dragging)
				x.stop()
				y.stop()

				let imageBounds = imageRef.current.getBoundingClientRect()
				let containerBounds = imageContainerRef.current.getBoundingClientRect()
				let originalWidth = imageRef.current.clientWidth
				let widthOverhang = (imageBounds.width - originalWidth) / 2
				let originalHeight = imageRef.current.clientHeight
				let heightOverhang = (imageBounds.height - originalHeight) / 2
				let maxX = widthOverhang
				let minX = -(imageBounds.width - containerBounds.width) + widthOverhang
				let maxY = heightOverhang
				let minY = -(imageBounds.height - containerBounds.height) + heightOverhang

				x.set(dampen(dx, [minX, maxX]))
				y.set(dampen(dy, [minY, maxY]))
			},

			onPinch: ({ pinching, event, memo, origin: [pinchOriginX, pinchOriginY], offset: [d] }) => {
				event.preventDefault()
				setIsPinching(pinching)
				x.stop()
				y.stop()

				memo ??= {
					bounds: imageRef.current.getBoundingClientRect(),
					crop: { x: x.get(), y: y.get(), scale: scale.get() }
				}

				let transformOriginX = memo.bounds.x + memo.bounds.width / 2
				let transformOriginY = memo.bounds.y + memo.bounds.height / 2

				let displacementX = (transformOriginX - pinchOriginX) / memo.crop.scale
				let displacementY = (transformOriginY - pinchOriginY) / memo.crop.scale

				let initialOffsetDistance = (memo.crop.scale - 1) * 200
				let movementDistance = d - initialOffsetDistance

				scale.set(1 + d / 200)
				x.set(memo.crop.x + (displacementX * movementDistance) / 200)
				y.set(memo.crop.y + (displacementY * movementDistance) / 200)

				return memo
			},

			onDragEnd: maybeAdjustImage,
			onPinchEnd: maybeAdjustImage
		},
		{
			drag: {
				initial: () => [x.get(), y.get()]
			},
			pinch: {
				distanceBounds: { min: 0 }
			},
			domTarget: imageRef,
			eventOptions: { passive: false }
		}
	)

	function maybeAdjustImage() {
		let newCrop = { x: x.get(), y: y.get(), scale: scale.get() }
		let imageBounds = imageRef.current.getBoundingClientRect()
		let containerBounds = imageContainerRef.current.getBoundingClientRect()
		let originalWidth = imageRef.current.clientWidth
		let widthOverhang = (imageBounds.width - originalWidth) / 2
		let originalHeight = imageRef.current.clientHeight
		let heightOverhang = (imageBounds.height - originalHeight) / 2

		if (imageBounds.left > containerBounds.left) {
			newCrop.x = widthOverhang
		} else if (imageBounds.right < containerBounds.right) {
			newCrop.x = -(imageBounds.width - containerBounds.width) + widthOverhang
		}

		if (imageBounds.top > containerBounds.top) {
			newCrop.y = heightOverhang
		} else if (imageBounds.bottom < containerBounds.bottom) {
			newCrop.y = -(imageBounds.height - containerBounds.height) + heightOverhang
		}

		animate(x, newCrop.x, {
			type: 'tween',
			duration: 0.4,
			ease: [0.25, 1, 0.5, 1]
		})
		animate(y, newCrop.y, {
			type: 'tween',
			duration: 0.4,
			ease: [0.25, 1, 0.5, 1]
		})
		onCropChange(newCrop)
	}

	return (
		<div className='w-full flex justify-center'>
			<div className={`relative overflow-hidden  ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}>
				<div ref={imageContainerRef}>
					<motion.div
						ref={imageRef}
						style={{
							x: x,
							y: y,
							scale: scale,
							touchAction: 'none',
							userSelect: 'none',
							MozUserSelect: 'none',
							//@ts-ignore
							WebkitUserDrag: 'none'
						}}
						className={`${
							id === 'T2S' ? 'w-[3100px]' : id === 'T2B' ? 'w-[2000px]' : id === 'T3' ? 'w-[2450px]' : 'w-[1580px]'
						} relative h-full max-w-none max-h-none  mx-auto `}>
						{/* //@ts-ignore */}
						{children}
					</motion.div>
					<div className='flex w-full justify-end absolute bottom-0 right-0 gap-3 pt-2 px-10 z-50'>
						<button
							onClick={() => {
								scale.set(scale.get() === 3 ? 3 : scale.get() + 0.25)
							}}>
							<IconSearchPlus fill='#4C000C' width={20} height={20} />
						</button>
						<button
							onClick={() => {
								scale.set(scale.get() === 1 ? 1 : scale.get() - 0.25)
							}}>
							<IconSearchMinus fill='#4C000C' width={20} height={20} />
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

function dampen(val: any, [min, max]: any) {
	if (val > max) {
		let extra = val - max
		let dampenedExtra = extra > 0 ? Math.sqrt(extra) : -Math.sqrt(-extra)
		return max + dampenedExtra * 2
	} else if (val < min) {
		let extra = val - min
		let dampenedExtra = extra > 0 ? Math.sqrt(extra) : -Math.sqrt(-extra)
		return min + dampenedExtra * 2
	} else {
		return val
	}
}
